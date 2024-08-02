import { VoteEventCandidateWhereInput } from "./VoteEventCandidateWhereInput";
import { VoteEventCandidateOrderByInput } from "./VoteEventCandidateOrderByInput";

export type VoteEventCandidateFindManyArgs = {
  where?: VoteEventCandidateWhereInput;
  orderBy?: Array<VoteEventCandidateOrderByInput>;
  skip?: number;
  take?: number;
};
