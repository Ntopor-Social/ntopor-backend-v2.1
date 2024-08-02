import { SortOrder } from "../../util/SortOrder";

export type TicketPackageOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  dateCreated?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  packageDescription?: SortOrder;
  packageName?: SortOrder;
  packageSize?: SortOrder;
  updatedAt?: SortOrder;
};
