import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";

export type TicketPackage = {
  createdAt: Date;
  currency: string | null;
  dateCreated: Date | null;
  event?: Event | null;
  id: string;
  packageDescription: string | null;
  packageName: string | null;
  packageSize: number | null;
  tickets?: Array<Ticket>;
  updatedAt: Date;
};
