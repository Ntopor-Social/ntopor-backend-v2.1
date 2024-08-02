import { User } from "../user/User";
import { Event } from "../event/Event";
import { JsonValue } from "type-fest";
import { TicketPackage } from "../ticketPackage/TicketPackage";

export type Ticket = {
  boughtBy?: User | null;
  createdAt: Date;
  dateCreated: Date | null;
  event?: Event | null;
  eventDateTime: Date | null;
  id: string;
  isTicketActive: boolean | null;
  ticketOwners?: Array<User>;
  ticketOwnersMeta: JsonValue;
  ticketType?: TicketPackage | null;
  updatedAt: Date;
};
