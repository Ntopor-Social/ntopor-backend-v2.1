import { Like } from "../like/Like";
import { Media } from "../media/Media";
import { Post } from "../post/Post";
import { Report } from "../report/Report";
import { Share } from "../share/Share";
import { User } from "../user/User";

export type Comment = {
  commentContent: string | null;
  createdAt: Date;
  date: Date | null;
  hashtags?: "Option1" | null;
  id: string;
  isMedia: boolean | null;
  likes?: Array<Like>;
  mediaItems?: Array<Media>;
  meta: string | null;
  metaType?: "Option1" | null;
  post?: Post | null;
  reports?: Array<Report>;
  shares?: Array<Share>;
  tagged: string | null;
  updatedAt: Date;
  user?: User | null;
};
