import { SortOrder } from "../../util/SortOrder";

export type VoteOrderByInput = {
  candidate?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  paid?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
  voteEventCandidateId?: SortOrder;
};
