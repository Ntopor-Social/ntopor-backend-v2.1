import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  lat?: SortOrder;
  lng?: SortOrder;
  meta?: SortOrder;
  metaType?: SortOrder;
  place?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  zip?: SortOrder;
};
