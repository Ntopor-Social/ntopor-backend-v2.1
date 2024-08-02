import { VoteEventCandidateWhereUniqueInput } from "../voteEventCandidate/VoteEventCandidateWhereUniqueInput";
import { UserCreateNestedManyWithoutVotesInput } from "./UserCreateNestedManyWithoutVotesInput";

export type VoteCreateInput = {
  candidate?: string | null;
  currency?: string | null;
  dateCreated?: Date | null;
  paid?: number | null;
  quantity?: number | null;
  voteEventCandidate?: VoteEventCandidateWhereUniqueInput | null;
  voter?: UserCreateNestedManyWithoutVotesInput;
};
