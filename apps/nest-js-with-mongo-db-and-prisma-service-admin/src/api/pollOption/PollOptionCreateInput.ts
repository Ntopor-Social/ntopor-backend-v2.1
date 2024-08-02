import { PollingWhereUniqueInput } from "../polling/PollingWhereUniqueInput";
import { PollCreateNestedManyWithoutPollOptionsInput } from "./PollCreateNestedManyWithoutPollOptionsInput";

export type PollOptionCreateInput = {
  dateCreated?: Date | null;
  polling?: PollingWhereUniqueInput | null;
  polls?: PollCreateNestedManyWithoutPollOptionsInput;
};
