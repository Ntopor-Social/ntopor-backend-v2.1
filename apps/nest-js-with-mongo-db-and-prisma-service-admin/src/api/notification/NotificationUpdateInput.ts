import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  actionRequired?: boolean | null;
  content?: string | null;
  dateCreated?: Date | null;
  isViewed?: boolean | null;
  metaType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
