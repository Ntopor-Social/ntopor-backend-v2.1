import { VoteEvent as TVoteEvent } from "../api/voteEvent/VoteEvent";

export const VOTEEVENT_TITLE_FIELD = "eventName";

export const VoteEventTitle = (record: TVoteEvent): string => {
  return record.eventName?.toString() || String(record.id);
};
