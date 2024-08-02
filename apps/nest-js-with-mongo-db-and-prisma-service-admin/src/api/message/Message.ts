import { Media } from "../media/Media";
import { User } from "../user/User";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  isDeleted: boolean | null;
  isRead: boolean | null;
  isReceived: boolean | null;
  mediaItems?: Array<Media>;
  receiver?: User | null;
  sender?: User | null;
  timestamp: Date | null;
  updatedAt: Date;
};
