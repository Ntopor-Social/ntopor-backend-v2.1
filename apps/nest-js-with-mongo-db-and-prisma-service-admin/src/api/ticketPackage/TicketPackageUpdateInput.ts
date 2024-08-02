import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketUpdateManyWithoutTicketPackagesInput } from "./TicketUpdateManyWithoutTicketPackagesInput";

export type TicketPackageUpdateInput = {
  currency?: string | null;
  dateCreated?: Date | null;
  event?: EventWhereUniqueInput | null;
  packageDescription?: string | null;
  packageName?: string | null;
  packageSize?: number | null;
  tickets?: TicketUpdateManyWithoutTicketPackagesInput;
};
