import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "enterpriseName";

export const UserTitle = (record: TUser): string => {
  return record.enterpriseName?.toString() || String(record.id);
};
