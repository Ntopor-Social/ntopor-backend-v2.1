import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ShareUpdateInput = {
  comment?: CommentWhereUniqueInput | null;
  dateCreated?: Date | null;
  post?: PostWhereUniqueInput | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
