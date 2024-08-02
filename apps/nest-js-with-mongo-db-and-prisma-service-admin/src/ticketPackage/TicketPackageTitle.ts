import { TicketPackage as TTicketPackage } from "../api/ticketPackage/TicketPackage";

export const TICKETPACKAGE_TITLE_FIELD = "packageName";

export const TicketPackageTitle = (record: TTicketPackage): string => {
  return record.packageName?.toString() || String(record.id);
};
