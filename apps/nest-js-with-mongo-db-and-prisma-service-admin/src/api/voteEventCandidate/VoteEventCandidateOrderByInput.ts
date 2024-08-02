import { SortOrder } from "../../util/SortOrder";

export type VoteEventCandidateOrderByInput = {
  vi?: SortOrder;
  candidateBio?: SortOrder;
  candidateName?: SortOrder;
  candidateProfileId?: SortOrder;
  candidateUsername?: SortOrder;
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  voteEventId?: SortOrder;
  votesId?: SortOrder;
};
