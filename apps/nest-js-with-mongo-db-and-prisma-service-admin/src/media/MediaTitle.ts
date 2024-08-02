import { Media as TMedia } from "../api/media/Media";

export const MEDIA_TITLE_FIELD = "duration";

export const MediaTitle = (record: TMedia): string => {
  return record.duration?.toString() || String(record.id);
};
