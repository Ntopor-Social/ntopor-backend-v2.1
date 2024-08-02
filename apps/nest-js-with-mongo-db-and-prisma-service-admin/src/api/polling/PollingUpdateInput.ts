import { PollOptionUpdateManyWithoutPollingsInput } from "./PollOptionUpdateManyWithoutPollingsInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type PollingUpdateInput = {
  dateCreated?: Date | null;
  endDate?: Date | null;
  isActive?: boolean | null;
  meta?: string | null;
  pollOptions?: PollOptionUpdateManyWithoutPollingsInput;
  post?: PostWhereUniqueInput | null;
  startDate?: Date | null;
  typeField?: "Option1" | null;
};
