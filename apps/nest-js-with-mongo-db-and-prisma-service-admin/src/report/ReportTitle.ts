import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "meta";

export const ReportTitle = (record: TReport): string => {
  return record.meta?.toString() || String(record.id);
};
