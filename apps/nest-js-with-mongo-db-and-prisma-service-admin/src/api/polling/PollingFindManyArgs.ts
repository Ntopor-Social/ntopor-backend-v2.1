import { PollingWhereInput } from "./PollingWhereInput";
import { PollingOrderByInput } from "./PollingOrderByInput";

export type PollingFindManyArgs = {
  where?: PollingWhereInput;
  orderBy?: Array<PollingOrderByInput>;
  skip?: number;
  take?: number;
};
