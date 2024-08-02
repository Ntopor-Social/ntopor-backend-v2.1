import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  actionRequired?: BooleanNullableFilter;
  content?: StringNullableFilter;
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  isViewed?: BooleanNullableFilter;
  metaType?: "Option1";
  user?: UserWhereUniqueInput;
};
