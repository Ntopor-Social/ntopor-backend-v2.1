import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "commentContent";

export const CommentTitle = (record: TComment): string => {
  return record.commentContent?.toString() || String(record.id);
};
