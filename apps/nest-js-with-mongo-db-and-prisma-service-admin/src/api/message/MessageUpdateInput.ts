import { MediaUpdateManyWithoutMessagesInput } from "./MediaUpdateManyWithoutMessagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  isDeleted?: boolean | null;
  isRead?: boolean | null;
  isReceived?: boolean | null;
  mediaItems?: MediaUpdateManyWithoutMessagesInput;
  receiver?: UserWhereUniqueInput | null;
  sender?: UserWhereUniqueInput | null;
  timestamp?: Date | null;
};
