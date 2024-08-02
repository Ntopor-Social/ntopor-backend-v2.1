import { VoteEventWhereInput } from "./VoteEventWhereInput";
import { VoteEventOrderByInput } from "./VoteEventOrderByInput";

export type VoteEventFindManyArgs = {
  where?: VoteEventWhereInput;
  orderBy?: Array<VoteEventOrderByInput>;
  skip?: number;
  take?: number;
};
