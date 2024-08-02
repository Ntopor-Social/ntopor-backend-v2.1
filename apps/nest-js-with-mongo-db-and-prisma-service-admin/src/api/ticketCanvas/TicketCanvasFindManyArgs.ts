import { TicketCanvasWhereInput } from "./TicketCanvasWhereInput";
import { TicketCanvasOrderByInput } from "./TicketCanvasOrderByInput";

export type TicketCanvasFindManyArgs = {
  where?: TicketCanvasWhereInput;
  orderBy?: Array<TicketCanvasOrderByInput>;
  skip?: number;
  take?: number;
};
