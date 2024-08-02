import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  isRead?: SortOrder;
  isReceived?: SortOrder;
  receivedMessages?: SortOrder;
  sentMessages?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
