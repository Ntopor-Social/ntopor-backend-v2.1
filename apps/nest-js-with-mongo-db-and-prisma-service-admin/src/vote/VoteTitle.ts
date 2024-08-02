import { Vote as TVote } from "../api/vote/Vote";

export const VOTE_TITLE_FIELD = "candidate";

export const VoteTitle = (record: TVote): string => {
  return record.candidate?.toString() || String(record.id);
};
