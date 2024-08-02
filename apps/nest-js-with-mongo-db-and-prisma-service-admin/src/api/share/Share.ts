import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";
import { User } from "../user/User";

export type Share = {
  comment?: Comment | null;
  createdAt: Date;
  dateCreated: Date | null;
  id: string;
  post?: Post | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
