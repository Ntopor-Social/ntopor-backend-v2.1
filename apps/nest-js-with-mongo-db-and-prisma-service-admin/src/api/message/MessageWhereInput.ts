import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MediaListRelationFilter } from "../media/MediaListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanNullableFilter;
  isRead?: BooleanNullableFilter;
  isReceived?: BooleanNullableFilter;
  mediaItems?: MediaListRelationFilter;
  receiver?: UserWhereUniqueInput;
  sender?: UserWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
