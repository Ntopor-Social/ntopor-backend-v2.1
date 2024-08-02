import { Share as TShare } from "../api/share/Share";

export const SHARE_TITLE_FIELD = "id";

export const ShareTitle = (record: TShare): string => {
  return record.id?.toString() || String(record.id);
};
