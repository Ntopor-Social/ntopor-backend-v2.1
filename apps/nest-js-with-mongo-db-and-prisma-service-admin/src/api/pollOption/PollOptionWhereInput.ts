import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PollingWhereUniqueInput } from "../polling/PollingWhereUniqueInput";
import { PollListRelationFilter } from "../poll/PollListRelationFilter";

export type PollOptionWhereInput = {
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  polling?: PollingWhereUniqueInput;
  polls?: PollListRelationFilter;
};
