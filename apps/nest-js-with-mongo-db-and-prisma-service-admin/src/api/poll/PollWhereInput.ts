import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PollOptionWhereUniqueInput } from "../pollOption/PollOptionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PollWhereInput = {
  currency?: StringNullableFilter;
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  packageDescription?: StringNullableFilter;
  packageName?: StringNullableFilter;
  packageSize?: IntNullableFilter;
  pollOption?: PollOptionWhereUniqueInput;
  voter?: UserWhereUniqueInput;
};
