import { Polling } from "../polling/Polling";
import { Poll } from "../poll/Poll";

export type PollOption = {
  createdAt: Date;
  dateCreated: Date | null;
  id: string;
  polling?: Polling | null;
  polls?: Array<Poll>;
  updatedAt: Date;
};
