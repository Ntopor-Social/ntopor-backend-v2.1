import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  BoughtBy?: SortOrder;
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  eventId?: SortOrder;
  eventDateTime?: SortOrder;
  id?: SortOrder;
  isTicketActive?: SortOrder;
  ticketOwnersMeta?: SortOrder;
  tickets?: SortOrder;
  updatedAt?: SortOrder;
};
