import { SortOrder } from "../../util/SortOrder";

export type PollOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  packageDescription?: SortOrder;
  packageName?: SortOrder;
  packageSize?: SortOrder;
  pollOptionId?: SortOrder;
  updatedAt?: SortOrder;
  votedPolls?: SortOrder;
};
