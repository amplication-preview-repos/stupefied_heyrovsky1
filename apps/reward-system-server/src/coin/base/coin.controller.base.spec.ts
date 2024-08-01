import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { CoinController } from "../coin.controller";
import { CoinService } from "../coin.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  coins: 42,
  createdAt: new Date(),
  dataCadastro: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  ip: "exampleIp",
  rewardSharing: 42,
  updatedAt: new Date(),
  userHash: "exampleUserHash",
};
const CREATE_RESULT = {
  coins: 42,
  createdAt: new Date(),
  dataCadastro: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  ip: "exampleIp",
  rewardSharing: 42,
  updatedAt: new Date(),
  userHash: "exampleUserHash",
};
const FIND_MANY_RESULT = [
  {
    coins: 42,
    createdAt: new Date(),
    dataCadastro: new Date(),
    email: "exampleEmail",
    id: "exampleId",
    ip: "exampleIp",
    rewardSharing: 42,
    updatedAt: new Date(),
    userHash: "exampleUserHash",
  },
];
const FIND_ONE_RESULT = {
  coins: 42,
  createdAt: new Date(),
  dataCadastro: new Date(),
  email: "exampleEmail",
  id: "exampleId",
  ip: "exampleIp",
  rewardSharing: 42,
  updatedAt: new Date(),
  userHash: "exampleUserHash",
};

const service = {
  createCoin() {
    return CREATE_RESULT;
  },
  coins: () => FIND_MANY_RESULT,
  coin: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Coin", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CoinService,
          useValue: service,
        },
      ],
      controllers: [CoinController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /coins", async () => {
    await request(app.getHttpServer())
      .post("/coins")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataCadastro: CREATE_RESULT.dataCadastro.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /coins", async () => {
    await request(app.getHttpServer())
      .get("/coins")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dataCadastro: FIND_MANY_RESULT[0].dataCadastro.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /coins/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/coins"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /coins/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/coins"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dataCadastro: FIND_ONE_RESULT.dataCadastro.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /coins existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/coins")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dataCadastro: CREATE_RESULT.dataCadastro.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/coins")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
