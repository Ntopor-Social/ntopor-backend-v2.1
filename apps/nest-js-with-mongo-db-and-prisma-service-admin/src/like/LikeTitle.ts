import { Like as TLike } from "../api/like/Like";

export const LIKE_TITLE_FIELD = "meta";

export const LikeTitle = (record: TLike): string => {
  return record.meta?.toString() || String(record.id);
};
