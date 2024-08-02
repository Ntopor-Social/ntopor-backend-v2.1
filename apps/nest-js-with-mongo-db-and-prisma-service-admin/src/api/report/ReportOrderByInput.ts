import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  meta?: SortOrder;
  postId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
