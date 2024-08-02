import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { VoteEventCandidateWhereUniqueInput } from "../voteEventCandidate/VoteEventCandidateWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type VoteWhereInput = {
  candidate?: StringNullableFilter;
  currency?: StringNullableFilter;
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  paid?: IntNullableFilter;
  quantity?: IntNullableFilter;
  voteEventCandidate?: VoteEventCandidateWhereUniqueInput;
  voter?: UserListRelationFilter;
};
