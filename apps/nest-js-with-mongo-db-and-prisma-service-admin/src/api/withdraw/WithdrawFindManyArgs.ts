import { WithdrawWhereInput } from "./WithdrawWhereInput";
import { WithdrawOrderByInput } from "./WithdrawOrderByInput";

export type WithdrawFindManyArgs = {
  where?: WithdrawWhereInput;
  orderBy?: Array<WithdrawOrderByInput>;
  skip?: number;
  take?: number;
};
