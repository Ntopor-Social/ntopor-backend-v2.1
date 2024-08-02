import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PollOptionListRelationFilter } from "../pollOption/PollOptionListRelationFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type PollingWhereInput = {
  dateCreated?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  meta?: StringNullableFilter;
  pollOptions?: PollOptionListRelationFilter;
  post?: PostWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  typeField?: "Option1";
};
