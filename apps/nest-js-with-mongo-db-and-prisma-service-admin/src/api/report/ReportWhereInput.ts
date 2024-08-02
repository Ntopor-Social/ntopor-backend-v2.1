import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportWhereInput = {
  comment?: CommentWhereUniqueInput;
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  meta?: StringNullableFilter;
  post?: PostWhereUniqueInput;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
