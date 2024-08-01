import { SortOrder } from "../../util/SortOrder";

export type RedeemOrderByInput = {
  action?: SortOrder;
  coinValue?: SortOrder;
  coinsAfter?: SortOrder;
  coinsBefore?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userHash?: SortOrder;
};
