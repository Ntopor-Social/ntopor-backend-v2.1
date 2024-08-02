import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DeviceInfoWhereInput = {
  appVersion?: StringNullableFilter;
  deviceLanguage?: StringNullableFilter;
  deviceMemory?: StringNullableFilter;
  deviceModel?: StringNullableFilter;
  deviceType?: StringNullableFilter;
  deviceVersion?: StringNullableFilter;
  expoToken?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
