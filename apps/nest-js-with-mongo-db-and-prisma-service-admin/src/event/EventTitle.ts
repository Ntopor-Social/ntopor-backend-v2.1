import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "eventName";

export const EventTitle = (record: TEvent): string => {
  return record.eventName?.toString() || String(record.id);
};
