import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VoteEventWhereUniqueInput } from "../voteEvent/VoteEventWhereUniqueInput";
import { VoteEventCandidateWhereUniqueInput } from "../voteEventCandidate/VoteEventCandidateWhereUniqueInput";

export type MediaUpdateInput = {
  comment?: CommentWhereUniqueInput | null;
  dateCreated?: Date | null;
  duration?: string | null;
  event?: EventWhereUniqueInput | null;
  height?: number | null;
  message?: MessageWhereUniqueInput | null;
  meta?: string | null;
  metaType?: "Option1" | null;
  post?: PostWhereUniqueInput | null;
  thumbnail?: string | null;
  typeField?: "Option1" | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  voteEvent?: VoteEventWhereUniqueInput | null;
  voteEventCandidate?: VoteEventCandidateWhereUniqueInput | null;
  voteEventCandidateMedia?: VoteEventCandidateWhereUniqueInput | null;
  width?: number | null;
};
