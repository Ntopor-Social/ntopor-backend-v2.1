import { PollWhereInput } from "./PollWhereInput";
import { PollOrderByInput } from "./PollOrderByInput";

export type PollFindManyArgs = {
  where?: PollWhereInput;
  orderBy?: Array<PollOrderByInput>;
  skip?: number;
  take?: number;
};
