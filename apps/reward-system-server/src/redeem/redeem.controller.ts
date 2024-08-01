import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RedeemService } from "./redeem.service";
import { RedeemControllerBase } from "./base/redeem.controller.base";

@swagger.ApiTags("redeems")
@common.Controller("redeems")
export class RedeemController extends RedeemControllerBase {
  constructor(protected readonly service: RedeemService) {
    super(service);
  }
}
