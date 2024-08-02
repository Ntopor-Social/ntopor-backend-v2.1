import { User } from "../user/User";

export type DeviceInfo = {
  appVersion: string | null;
  createdAt: Date;
  deviceLanguage: string | null;
  deviceMemory: string | null;
  deviceModel: string | null;
  deviceType: string | null;
  deviceVersion: string | null;
  expoToken: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
