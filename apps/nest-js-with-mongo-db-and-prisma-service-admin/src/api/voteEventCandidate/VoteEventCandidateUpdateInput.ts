import { MediaWhereUniqueInput } from "../media/MediaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { MediaUpdateManyWithoutVoteEventCandidatesInput } from "./MediaUpdateManyWithoutVoteEventCandidatesInput";
import { VoteEventWhereUniqueInput } from "../voteEvent/VoteEventWhereUniqueInput";
import { VoteWhereUniqueInput } from "../vote/VoteWhereUniqueInput";

export type VoteEventCandidateUpdateInput = {
  candidacyPhoto?: MediaWhereUniqueInput | null;
  candidateBio?: string | null;
  candidateName?: string | null;
  candidateProfile?: UserWhereUniqueInput | null;
  candidateUsername?: string | null;
  dateCreated?: Date | null;
  media?: MediaUpdateManyWithoutVoteEventCandidatesInput;
  voteEvent?: VoteEventWhereUniqueInput | null;
  votes?: VoteWhereUniqueInput | null;
};
