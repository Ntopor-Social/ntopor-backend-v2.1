import { User } from "../user/User";

export type Notification = {
  actionRequired: boolean | null;
  content: string | null;
  createdAt: Date;
  dateCreated: Date | null;
  id: string;
  isViewed: boolean | null;
  metaType?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
