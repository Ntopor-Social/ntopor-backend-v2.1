import { PostCreateNestedManyWithoutLocationsInput } from "./PostCreateNestedManyWithoutLocationsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationCreateInput = {
  city?: string | null;
  country?: string | null;
  dateCreated?: Date | null;
  lat?: string | null;
  lng?: string | null;
  meta?: string | null;
  metaType?: "Option1" | null;
  place?: string | null;
  posts?: PostCreateNestedManyWithoutLocationsInput;
  state?: string | null;
  user?: UserWhereUniqueInput | null;
  zip?: string | null;
};
