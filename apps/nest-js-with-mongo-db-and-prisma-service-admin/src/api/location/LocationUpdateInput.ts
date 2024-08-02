import { PostUpdateManyWithoutLocationsInput } from "./PostUpdateManyWithoutLocationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationUpdateInput = {
  city?: string | null;
  country?: string | null;
  dateCreated?: Date | null;
  lat?: string | null;
  lng?: string | null;
  meta?: string | null;
  metaType?: "Option1" | null;
  place?: string | null;
  posts?: PostUpdateManyWithoutLocationsInput;
  state?: string | null;
  user?: UserWhereUniqueInput | null;
  zip?: string | null;
};
