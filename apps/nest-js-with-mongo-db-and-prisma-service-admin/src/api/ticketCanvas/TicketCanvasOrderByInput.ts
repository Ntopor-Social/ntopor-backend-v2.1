import { SortOrder } from "../../util/SortOrder";

export type TicketCanvasOrderByInput = {
  canvasType?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
