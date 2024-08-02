import { MediaWhereUniqueInput } from "../media/MediaWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MediaListRelationFilter } from "../media/MediaListRelationFilter";
import { VoteEventWhereUniqueInput } from "../voteEvent/VoteEventWhereUniqueInput";
import { VoteWhereUniqueInput } from "../vote/VoteWhereUniqueInput";

export type VoteEventCandidateWhereInput = {
  candidacyPhoto?: MediaWhereUniqueInput;
  candidateBio?: StringNullableFilter;
  candidateName?: StringNullableFilter;
  candidateProfile?: UserWhereUniqueInput;
  candidateUsername?: StringNullableFilter;
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  media?: MediaListRelationFilter;
  voteEvent?: VoteEventWhereUniqueInput;
  votes?: VoteWhereUniqueInput;
};
