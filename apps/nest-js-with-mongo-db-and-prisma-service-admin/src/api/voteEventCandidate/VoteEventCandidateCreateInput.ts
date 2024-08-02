import { MediaWhereUniqueInput } from "../media/MediaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MediaCreateNestedManyWithoutVoteEventCandidatesInput } from "./MediaCreateNestedManyWithoutVoteEventCandidatesInput";
import { VoteEventWhereUniqueInput } from "../voteEvent/VoteEventWhereUniqueInput";
import { VoteWhereUniqueInput } from "../vote/VoteWhereUniqueInput";

export type VoteEventCandidateCreateInput = {
  candidacyPhoto?: MediaWhereUniqueInput | null;
  candidateBio?: string | null;
  candidateName?: string | null;
  candidateProfile?: UserWhereUniqueInput | null;
  candidateUsername?: string | null;
  dateCreated?: Date | null;
  media?: MediaCreateNestedManyWithoutVoteEventCandidatesInput;
  voteEvent?: VoteEventWhereUniqueInput | null;
  votes?: VoteWhereUniqueInput | null;
};
