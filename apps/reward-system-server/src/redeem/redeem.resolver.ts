import * as graphql from "@nestjs/graphql";
import { RedeemResolverBase } from "./base/redeem.resolver.base";
import { Redeem } from "./base/Redeem";
import { RedeemService } from "./redeem.service";

@graphql.Resolver(() => Redeem)
export class RedeemResolver extends RedeemResolverBase {
  constructor(protected readonly service: RedeemService) {
    super(service);
  }
}
