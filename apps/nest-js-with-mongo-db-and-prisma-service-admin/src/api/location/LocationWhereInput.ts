import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  lat?: StringNullableFilter;
  lng?: StringNullableFilter;
  meta?: StringNullableFilter;
  metaType?: "Option1";
  place?: StringNullableFilter;
  posts?: PostListRelationFilter;
  state?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  zip?: StringNullableFilter;
};
