import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  accumulated?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  eventBio?: SortOrder;
  eventDate?: SortOrder;
  eventLink?: SortOrder;
  eventLocation?: SortOrder;
  eventName?: SortOrder;
  eventPriceType?: SortOrder;
  eventType?: SortOrder;
  featuredImage?: SortOrder;
  galerry?: SortOrder;
  gallery?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isFeatured?: SortOrder;
  isPrivate?: SortOrder;
  isTicketAvailable?: SortOrder;
  events?: SortOrder;
  ticketAvailableCount?: SortOrder;
  ticketCount?: SortOrder;
  ticketsSold?: SortOrder;
  updatedAt?: SortOrder;
};
