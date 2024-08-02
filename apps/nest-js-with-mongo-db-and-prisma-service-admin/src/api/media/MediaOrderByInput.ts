import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  duration?: SortOrder;
  eventId?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  meta?: SortOrder;
  metaType?: SortOrder;
  postId?: SortOrder;
  thumbnail?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
  voteEventId?: SortOrder;
  voteEventCandidateId?: SortOrder;
  voteEventCandidateMediaId?: SortOrder;
  width?: SortOrder;
};
