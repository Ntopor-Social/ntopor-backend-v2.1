import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  hashtags?: SortOrder;
  id?: SortOrder;
  isBlocked?: SortOrder;
  isEvent?: SortOrder;
  isMedia?: SortOrder;
  isPolling?: SortOrder;
  isPromoted?: SortOrder;
  isVoteEvent?: SortOrder;
  linkedEvent?: SortOrder;
  linkedEventType?: SortOrder;
  locationId?: SortOrder;
  mentioned?: SortOrder;
  postDescription?: SortOrder;
  postType?: SortOrder;
  tagged?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
