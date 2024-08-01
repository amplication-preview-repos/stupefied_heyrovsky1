import { SortOrder } from "../../util/SortOrder";

export type CoinOrderByInput = {
  coins?: SortOrder;
  createdAt?: SortOrder;
  dataCadastro?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  rewardSharing?: SortOrder;
  updatedAt?: SortOrder;
  userHash?: SortOrder;
};
