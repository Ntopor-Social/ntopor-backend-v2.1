import { TicketPackageWhereInput } from "./TicketPackageWhereInput";
import { TicketPackageOrderByInput } from "./TicketPackageOrderByInput";

export type TicketPackageFindManyArgs = {
  where?: TicketPackageWhereInput;
  orderBy?: Array<TicketPackageOrderByInput>;
  skip?: number;
  take?: number;
};
