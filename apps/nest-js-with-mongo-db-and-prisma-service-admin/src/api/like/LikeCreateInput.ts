import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  comment?: CommentWhereUniqueInput | null;
  dateCreated?: Date | null;
  meta?: string | null;
  post?: PostWhereUniqueInput | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
