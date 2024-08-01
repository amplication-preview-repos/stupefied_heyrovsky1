export type Redeem = {
  action: string | null;
  coinValue: number | null;
  coinsAfter: number | null;
  coinsBefore: number | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userHash: string | null;
};
