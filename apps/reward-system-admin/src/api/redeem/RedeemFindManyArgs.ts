import { RedeemWhereInput } from "./RedeemWhereInput";
import { RedeemOrderByInput } from "./RedeemOrderByInput";

export type RedeemFindManyArgs = {
  where?: RedeemWhereInput;
  orderBy?: Array<RedeemOrderByInput>;
  skip?: number;
  take?: number;
};
