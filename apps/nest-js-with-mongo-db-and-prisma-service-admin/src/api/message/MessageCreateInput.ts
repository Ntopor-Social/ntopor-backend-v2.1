import { MediaCreateNestedManyWithoutMessagesInput } from "./MediaCreateNestedManyWithoutMessagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  isDeleted?: boolean | null;
  isRead?: boolean | null;
  isReceived?: boolean | null;
  mediaItems?: MediaCreateNestedManyWithoutMessagesInput;
  receiver?: UserWhereUniqueInput | null;
  sender?: UserWhereUniqueInput | null;
  timestamp?: Date | null;
};
