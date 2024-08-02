import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShareWhereInput = {
  comment?: CommentWhereUniqueInput;
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
