import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RedeemWhereInput = {
  action?: StringNullableFilter;
  coinValue?: IntNullableFilter;
  coinsAfter?: IntNullableFilter;
  coinsBefore?: IntNullableFilter;
  id?: StringFilter;
  userHash?: StringNullableFilter;
};
