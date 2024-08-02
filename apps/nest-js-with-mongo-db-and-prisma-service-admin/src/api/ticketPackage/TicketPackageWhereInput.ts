import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type TicketPackageWhereInput = {
  currency?: StringNullableFilter;
  dateCreated?: DateTimeNullableFilter;
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  packageDescription?: StringNullableFilter;
  packageName?: StringNullableFilter;
  packageSize?: IntNullableFilter;
  tickets?: TicketListRelationFilter;
};
