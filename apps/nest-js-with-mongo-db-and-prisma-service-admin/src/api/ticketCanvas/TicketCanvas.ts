import { User } from "../user/User";

export type TicketCanvas = {
  canvasType?: "Option1" | null;
  createdAt: Date;
  currency: string | null;
  dateCreated: Date | null;
  id: string;
  price: number | null;
  updatedAt: Date;
  user?: User | null;
};
