import { Poll as TPoll } from "../api/poll/Poll";

export const POLL_TITLE_FIELD = "packageName";

export const PollTitle = (record: TPoll): string => {
  return record.packageName?.toString() || String(record.id);
};
