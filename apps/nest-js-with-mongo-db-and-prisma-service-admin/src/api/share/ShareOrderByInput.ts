import { SortOrder } from "../../util/SortOrder";

export type ShareOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
