import { MediaUpdateManyWithoutEventsInput } from "./MediaUpdateManyWithoutEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TicketPackageUpdateManyWithoutEventsInput } from "./TicketPackageUpdateManyWithoutEventsInput";
import { TicketUpdateManyWithoutEventsInput } from "./TicketUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  accumulated?: number | null;
  balance?: number | null;
  dateCreated?: Date | null;
  eventBio?: string | null;
  eventDate?: Date | null;
  eventLink?: string | null;
  eventLocation?: string | null;
  eventName?: string | null;
  eventPriceType?: "Option1" | null;
  eventType?: "Option1" | null;
  featuredImage?: string | null;
  galerry?: string | null;
  gallery?: string | null;
  isActive?: boolean | null;
  isFeatured?: boolean | null;
  isPrivate?: boolean | null;
  isTicketAvailable?: boolean | null;
  mediaItems?: MediaUpdateManyWithoutEventsInput;
  organizer?: UserWhereUniqueInput | null;
  ticketAvailableCount?: string | null;
  ticketCount?: string | null;
  ticketPackages?: TicketPackageUpdateManyWithoutEventsInput;
  tickets?: TicketUpdateManyWithoutEventsInput;
  ticketsSold?: string | null;
};
