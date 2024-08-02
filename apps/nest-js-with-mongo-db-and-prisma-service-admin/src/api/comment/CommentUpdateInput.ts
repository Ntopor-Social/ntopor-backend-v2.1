import { LikeUpdateManyWithoutCommentsInput } from "./LikeUpdateManyWithoutCommentsInput";
import { MediaUpdateManyWithoutCommentsInput } from "./MediaUpdateManyWithoutCommentsInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { ReportUpdateManyWithoutCommentsInput } from "./ReportUpdateManyWithoutCommentsInput";
import { ShareUpdateManyWithoutCommentsInput } from "./ShareUpdateManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  commentContent?: string | null;
  date?: Date | null;
  hashtags?: "Option1" | null;
  isMedia?: boolean | null;
  likes?: LikeUpdateManyWithoutCommentsInput;
  mediaItems?: MediaUpdateManyWithoutCommentsInput;
  meta?: string | null;
  metaType?: "Option1" | null;
  post?: PostWhereUniqueInput | null;
  reports?: ReportUpdateManyWithoutCommentsInput;
  shares?: ShareUpdateManyWithoutCommentsInput;
  tagged?: string | null;
  user?: UserWhereUniqueInput | null;
};
