import { PollingWhereUniqueInput } from "../polling/PollingWhereUniqueInput";
import { PollUpdateManyWithoutPollOptionsInput } from "./PollUpdateManyWithoutPollOptionsInput";

export type PollOptionUpdateInput = {
  dateCreated?: Date | null;
  polling?: PollingWhereUniqueInput | null;
  polls?: PollUpdateManyWithoutPollOptionsInput;
};
