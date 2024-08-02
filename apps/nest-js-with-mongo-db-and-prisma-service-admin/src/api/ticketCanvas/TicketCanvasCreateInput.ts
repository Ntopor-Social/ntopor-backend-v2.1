import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketCanvasCreateInput = {
  canvasType?: "Option1" | null;
  currency?: string | null;
  dateCreated?: Date | null;
  price?: number | null;
  user?: UserWhereUniqueInput | null;
};
