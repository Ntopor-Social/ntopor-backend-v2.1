import { PollOption as TPollOption } from "../api/pollOption/PollOption";

export const POLLOPTION_TITLE_FIELD = "id";

export const PollOptionTitle = (record: TPollOption): string => {
  return record.id?.toString() || String(record.id);
};
