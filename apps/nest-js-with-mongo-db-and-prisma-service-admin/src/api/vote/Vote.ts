import { VoteEventCandidate } from "../voteEventCandidate/VoteEventCandidate";
import { User } from "../user/User";

export type Vote = {
  candidate: string | null;
  createdAt: Date;
  currency: string | null;
  dateCreated: Date | null;
  id: string;
  paid: number | null;
  quantity: number | null;
  updatedAt: Date;
  voteEventCandidate?: VoteEventCandidate | null;
  voter?: Array<User>;
};
