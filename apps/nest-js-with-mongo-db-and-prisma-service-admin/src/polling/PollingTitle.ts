import { Polling as TPolling } from "../api/polling/Polling";

export const POLLING_TITLE_FIELD = "meta";

export const PollingTitle = (record: TPolling): string => {
  return record.meta?.toString() || String(record.id);
};
