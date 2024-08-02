import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketCreateNestedManyWithoutTicketPackagesInput } from "./TicketCreateNestedManyWithoutTicketPackagesInput";

export type TicketPackageCreateInput = {
  currency?: string | null;
  dateCreated?: Date | null;
  event?: EventWhereUniqueInput | null;
  packageDescription?: string | null;
  packageName?: string | null;
  packageSize?: number | null;
  tickets?: TicketCreateNestedManyWithoutTicketPackagesInput;
};
