import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  actionRequired?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  isViewed?: SortOrder;
  metaType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
