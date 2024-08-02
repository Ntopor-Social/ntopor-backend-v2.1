import { VoteEventCandidateWhereUniqueInput } from "../voteEventCandidate/VoteEventCandidateWhereUniqueInput";
import { UserUpdateManyWithoutVotesInput } from "./UserUpdateManyWithoutVotesInput";

export type VoteUpdateInput = {
  candidate?: string | null;
  currency?: string | null;
  dateCreated?: Date | null;
  paid?: number | null;
  quantity?: number | null;
  voteEventCandidate?: VoteEventCandidateWhereUniqueInput | null;
  voter?: UserUpdateManyWithoutVotesInput;
};
