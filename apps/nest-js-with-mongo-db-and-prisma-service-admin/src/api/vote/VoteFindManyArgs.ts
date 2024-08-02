import { VoteWhereInput } from "./VoteWhereInput";
import { VoteOrderByInput } from "./VoteOrderByInput";

export type VoteFindManyArgs = {
  where?: VoteWhereInput;
  orderBy?: Array<VoteOrderByInput>;
  skip?: number;
  take?: number;
};
