import { DeviceInfo as TDeviceInfo } from "../api/deviceInfo/DeviceInfo";

export const DEVICEINFO_TITLE_FIELD = "appVersion";

export const DeviceInfoTitle = (record: TDeviceInfo): string => {
  return record.appVersion?.toString() || String(record.id);
};
