import { Media } from "../media/Media";
import { User } from "../user/User";
import { VoteEvent } from "../voteEvent/VoteEvent";
import { Vote } from "../vote/Vote";

export type VoteEventCandidate = {
  candidacyPhoto?: Media | null;
  candidateBio: string | null;
  candidateName: string | null;
  candidateProfile?: User | null;
  candidateUsername: string | null;
  createdAt: Date;
  dateCreated: Date | null;
  id: string;
  media?: Array<Media>;
  updatedAt: Date;
  voteEvent?: VoteEvent | null;
  votes?: Vote | null;
};
