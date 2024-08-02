import { MediaCreateNestedManyWithoutVoteEventsInput } from "./MediaCreateNestedManyWithoutVoteEventsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VoteEventCandidateCreateNestedManyWithoutVoteEventsInput } from "./VoteEventCandidateCreateNestedManyWithoutVoteEventsInput";

export type VoteEventCreateInput = {
  accumulated?: number | null;
  balance?: number | null;
  currency?: string | null;
  dateCreated?: Date | null;
  endDate?: Date | null;
  eventBio?: string | null;
  eventLink?: string | null;
  eventName?: string | null;
  eventPriceType?: "Option1" | null;
  gallery?: string | null;
  isFeatured?: boolean | null;
  isPrivate?: boolean | null;
  mediaItems?: MediaCreateNestedManyWithoutVoteEventsInput;
  organizer?: UserWhereUniqueInput | null;
  startDate?: Date | null;
  ticketsSold?: string | null;
  voteEventCandidates?: VoteEventCandidateCreateNestedManyWithoutVoteEventsInput;
  voteLimit?: string | null;
  votePrice?: number | null;
  votesAvailable?: number | null;
  votesPerUser?: string | null;
};
