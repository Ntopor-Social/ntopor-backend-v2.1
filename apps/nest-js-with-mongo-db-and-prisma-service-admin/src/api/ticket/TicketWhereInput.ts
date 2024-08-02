import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TicketPackageWhereUniqueInput } from "../ticketPackage/TicketPackageWhereUniqueInput";

export type TicketWhereInput = {
  boughtBy?: UserWhereUniqueInput;
  dateCreated?: DateTimeNullableFilter;
  event?: EventWhereUniqueInput;
  eventDateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  isTicketActive?: BooleanNullableFilter;
  ticketOwners?: UserListRelationFilter;
  ticketOwnersMeta?: JsonFilter;
  ticketType?: TicketPackageWhereUniqueInput;
};
