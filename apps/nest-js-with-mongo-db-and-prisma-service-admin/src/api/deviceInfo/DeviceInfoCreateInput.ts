import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceInfoCreateInput = {
  appVersion?: string | null;
  deviceLanguage?: string | null;
  deviceMemory?: string | null;
  deviceModel?: string | null;
  deviceType?: string | null;
  deviceVersion?: string | null;
  expoToken?: string | null;
  user?: UserWhereUniqueInput | null;
};
