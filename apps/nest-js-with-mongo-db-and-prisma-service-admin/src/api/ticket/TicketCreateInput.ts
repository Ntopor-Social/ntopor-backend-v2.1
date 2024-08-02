import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserCreateNestedManyWithoutTicketsInput } from "./UserCreateNestedManyWithoutTicketsInput";
import { InputJsonValue } from "../../types";
import { TicketPackageWhereUniqueInput } from "../ticketPackage/TicketPackageWhereUniqueInput";

export type TicketCreateInput = {
  boughtBy?: UserWhereUniqueInput | null;
  dateCreated?: Date | null;
  event?: EventWhereUniqueInput | null;
  eventDateTime?: Date | null;
  isTicketActive?: boolean | null;
  ticketOwners?: UserCreateNestedManyWithoutTicketsInput;
  ticketOwnersMeta?: InputJsonValue;
  ticketType?: TicketPackageWhereUniqueInput | null;
};
