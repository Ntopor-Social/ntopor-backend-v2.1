import { LikeCreateNestedManyWithoutCommentsInput } from "./LikeCreateNestedManyWithoutCommentsInput";
import { MediaCreateNestedManyWithoutCommentsInput } from "./MediaCreateNestedManyWithoutCommentsInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { ReportCreateNestedManyWithoutCommentsInput } from "./ReportCreateNestedManyWithoutCommentsInput";
import { ShareCreateNestedManyWithoutCommentsInput } from "./ShareCreateNestedManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  commentContent?: string | null;
  date?: Date | null;
  hashtags?: "Option1" | null;
  isMedia?: boolean | null;
  likes?: LikeCreateNestedManyWithoutCommentsInput;
  mediaItems?: MediaCreateNestedManyWithoutCommentsInput;
  meta?: string | null;
  metaType?: "Option1" | null;
  post?: PostWhereUniqueInput | null;
  reports?: ReportCreateNestedManyWithoutCommentsInput;
  shares?: ShareCreateNestedManyWithoutCommentsInput;
  tagged?: string | null;
  user?: UserWhereUniqueInput | null;
};
