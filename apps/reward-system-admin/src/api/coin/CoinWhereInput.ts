import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CoinWhereInput = {
  coins?: IntNullableFilter;
  dataCadastro?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  ip?: StringNullableFilter;
  rewardSharing?: IntNullableFilter;
  userHash?: StringNullableFilter;
};
