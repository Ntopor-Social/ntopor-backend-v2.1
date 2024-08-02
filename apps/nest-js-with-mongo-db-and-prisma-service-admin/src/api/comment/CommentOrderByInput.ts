import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  commentContent?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  hashtags?: SortOrder;
  id?: SortOrder;
  isMedia?: SortOrder;
  meta?: SortOrder;
  metaType?: SortOrder;
  postId?: SortOrder;
  tagged?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
