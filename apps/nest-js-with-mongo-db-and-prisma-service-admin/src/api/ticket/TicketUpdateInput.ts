import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserUpdateManyWithoutTicketsInput } from "./UserUpdateManyWithoutTicketsInput";
import { InputJsonValue } from "../../types";
import { TicketPackageWhereUniqueInput } from "../ticketPackage/TicketPackageWhereUniqueInput";

export type TicketUpdateInput = {
  boughtBy?: UserWhereUniqueInput | null;
  dateCreated?: Date | null;
  event?: EventWhereUniqueInput | null;
  eventDateTime?: Date | null;
  isTicketActive?: boolean | null;
  ticketOwners?: UserUpdateManyWithoutTicketsInput;
  ticketOwnersMeta?: InputJsonValue;
  ticketType?: TicketPackageWhereUniqueInput | null;
};
