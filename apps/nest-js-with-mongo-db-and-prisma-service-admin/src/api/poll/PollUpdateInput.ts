import { PollOptionWhereUniqueInput } from "../pollOption/PollOptionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PollUpdateInput = {
  currency?: string | null;
  dateCreated?: Date | null;
  packageDescription?: string | null;
  packageName?: string | null;
  packageSize?: number | null;
  pollOption?: PollOptionWhereUniqueInput | null;
  voter?: UserWhereUniqueInput | null;
};
