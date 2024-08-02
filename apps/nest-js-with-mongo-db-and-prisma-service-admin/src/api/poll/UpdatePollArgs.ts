import { PollWhereUniqueInput } from "./PollWhereUniqueInput";
import { PollUpdateInput } from "./PollUpdateInput";

export type UpdatePollArgs = {
  where: PollWhereUniqueInput;
  data: PollUpdateInput;
};
