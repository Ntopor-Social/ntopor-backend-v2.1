import { TicketCanvas as TTicketCanvas } from "../api/ticketCanvas/TicketCanvas";

export const TICKETCANVAS_TITLE_FIELD = "currency";

export const TicketCanvasTitle = (record: TTicketCanvas): string => {
  return record.currency?.toString() || String(record.id);
};
