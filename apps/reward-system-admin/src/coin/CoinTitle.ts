import { Coin as TCoin } from "../api/coin/Coin";

export const COIN_TITLE_FIELD = "ip";

export const CoinTitle = (record: TCoin): string => {
  return record.ip?.toString() || String(record.id);
};
