import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { MediaUpdateManyWithoutPostsInput } from "./MediaUpdateManyWithoutPostsInput";
import { PollingUpdateManyWithoutPostsInput } from "./PollingUpdateManyWithoutPostsInput";
import { ReportUpdateManyWithoutPostsInput } from "./ReportUpdateManyWithoutPostsInput";
import { ShareUpdateManyWithoutPostsInput } from "./ShareUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  date?: Date | null;
  hashtags?: string | null;
  isBlocked?: boolean | null;
  isEvent?: boolean | null;
  isMedia?: boolean | null;
  isPolling?: boolean | null;
  isPromoted?: boolean | null;
  isVoteEvent?: boolean | null;
  likes?: LikeUpdateManyWithoutPostsInput;
  linkedEvent?: string | null;
  linkedEventType?: "Option1" | null;
  location?: LocationWhereUniqueInput | null;
  mediaItems?: MediaUpdateManyWithoutPostsInput;
  mentioned?: string | null;
  pollings?: PollingUpdateManyWithoutPostsInput;
  postDescription?: string | null;
  postType?: string | null;
  reports?: ReportUpdateManyWithoutPostsInput;
  shares?: ShareUpdateManyWithoutPostsInput;
  tagged?: string | null;
  user?: UserWhereUniqueInput | null;
};
