import { PollOption } from "../pollOption/PollOption";
import { Post } from "../post/Post";

export type Polling = {
  createdAt: Date;
  dateCreated: Date | null;
  endDate: Date | null;
  id: string;
  isActive: boolean | null;
  meta: string | null;
  pollOptions?: Array<PollOption>;
  post?: Post | null;
  startDate: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
