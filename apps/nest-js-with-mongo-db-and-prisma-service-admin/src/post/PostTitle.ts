import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "linkedEvent";

export const PostTitle = (record: TPost): string => {
  return record.linkedEvent?.toString() || String(record.id);
};
