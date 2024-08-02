import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "content";

export const NotificationTitle = (record: TNotification): string => {
  return record.content?.toString() || String(record.id);
};
