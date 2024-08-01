import { Redeem as TRedeem } from "../api/redeem/Redeem";

export const REDEEM_TITLE_FIELD = "action";

export const RedeemTitle = (record: TRedeem): string => {
  return record.action?.toString() || String(record.id);
};
