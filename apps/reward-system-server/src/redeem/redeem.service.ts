import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RedeemServiceBase } from "./base/redeem.service.base";

@Injectable()
export class RedeemService extends RedeemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
