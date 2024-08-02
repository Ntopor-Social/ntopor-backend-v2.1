import { PollOptionWhereInput } from "./PollOptionWhereInput";
import { PollOptionOrderByInput } from "./PollOptionOrderByInput";

export type PollOptionFindManyArgs = {
  where?: PollOptionWhereInput;
  orderBy?: Array<PollOptionOrderByInput>;
  skip?: number;
  take?: number;
};
