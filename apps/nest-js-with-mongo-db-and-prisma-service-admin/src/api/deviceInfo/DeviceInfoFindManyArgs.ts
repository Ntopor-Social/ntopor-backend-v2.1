import { DeviceInfoWhereInput } from "./DeviceInfoWhereInput";
import { DeviceInfoOrderByInput } from "./DeviceInfoOrderByInput";

export type DeviceInfoFindManyArgs = {
  where?: DeviceInfoWhereInput;
  orderBy?: Array<DeviceInfoOrderByInput>;
  skip?: number;
  take?: number;
};
