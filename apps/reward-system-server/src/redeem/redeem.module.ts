import { Module } from "@nestjs/common";
import { RedeemModuleBase } from "./base/redeem.module.base";
import { RedeemService } from "./redeem.service";
import { RedeemController } from "./redeem.controller";
import { RedeemResolver } from "./redeem.resolver";

@Module({
  imports: [RedeemModuleBase],
  controllers: [RedeemController],
  providers: [RedeemService, RedeemResolver],
  exports: [RedeemService],
})
export class RedeemModule {}
