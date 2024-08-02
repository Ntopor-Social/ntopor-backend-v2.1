import { Withdraw as TWithdraw } from "../api/withdraw/Withdraw";

export const WITHDRAW_TITLE_FIELD = "id";

export const WithdrawTitle = (record: TWithdraw): string => {
  return record.id?.toString() || String(record.id);
};
