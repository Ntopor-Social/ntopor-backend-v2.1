import { ShareWhereInput } from "./ShareWhereInput";
import { ShareOrderByInput } from "./ShareOrderByInput";

export type ShareFindManyArgs = {
  where?: ShareWhereInput;
  orderBy?: Array<ShareOrderByInput>;
  skip?: number;
  take?: number;
};
