import { SortOrder } from "../../util/SortOrder";

export type PollingOrderByInput = {
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  meta?: SortOrder;
  postId?: SortOrder;
  startDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
