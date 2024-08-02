import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { MediaListRelationFilter } from "../media/MediaListRelationFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";
import { ShareListRelationFilter } from "../share/ShareListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  commentContent?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  hashtags?: "Option1";
  id?: StringFilter;
  isMedia?: BooleanNullableFilter;
  likes?: LikeListRelationFilter;
  mediaItems?: MediaListRelationFilter;
  meta?: StringNullableFilter;
  metaType?: "Option1";
  post?: PostWhereUniqueInput;
  reports?: ReportListRelationFilter;
  shares?: ShareListRelationFilter;
  tagged?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
