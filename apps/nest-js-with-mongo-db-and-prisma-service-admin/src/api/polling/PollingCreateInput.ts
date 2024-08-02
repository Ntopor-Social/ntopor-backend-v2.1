import { PollOptionCreateNestedManyWithoutPollingsInput } from "./PollOptionCreateNestedManyWithoutPollingsInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type PollingCreateInput = {
  dateCreated?: Date | null;
  endDate?: Date | null;
  isActive?: boolean | null;
  meta?: string | null;
  pollOptions?: PollOptionCreateNestedManyWithoutPollingsInput;
  post?: PostWhereUniqueInput | null;
  startDate?: Date | null;
  typeField?: "Option1" | null;
};
