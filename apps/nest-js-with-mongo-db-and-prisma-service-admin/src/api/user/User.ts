import { VoteEventCandidate } from "../voteEventCandidate/VoteEventCandidate";
import { Comment } from "../comment/Comment";
import { DeviceInfo } from "../deviceInfo/DeviceInfo";
import { Vote } from "../vote/Vote";
import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";
import { Like } from "../like/Like";
import { Location } from "../location/Location";
import { Media } from "../media/Media";
import { Notification } from "../notification/Notification";
import { Poll } from "../poll/Poll";
import { Post } from "../post/Post";
import { Message } from "../message/Message";
import { Report } from "../report/Report";
import { JsonValue } from "type-fest";
import { Share } from "../share/Share";
import { TicketCanvas } from "../ticketCanvas/TicketCanvas";
import { VoteEvent } from "../voteEvent/VoteEvent";

export type User = {
  accountVerification: string | null;
  bio: string | null;
  blocked: string | null;
  candidateProfiles?: Array<VoteEventCandidate>;
  comments?: Array<Comment>;
  createdAt: Date;
  dateCreated: Date | null;
  deviceInfos?: Array<DeviceInfo>;
  devices?: Array<"Option1">;
  dob: Date | null;
  email: string | null;
  enterpriseLocation: string | null;
  enterpriseName: string | null;
  eventVotes?: Vote | null;
  events?: Array<Event>;
  firstName: string | null;
  groupTickets?: Array<Ticket>;
  id: string;
  isAccountActive: boolean | null;
  isAdmin: boolean | null;
  isAppleAuth: boolean | null;
  isBlocked: boolean | null;
  isEmailVerified: boolean | null;
  isGoogleAuth: boolean | null;
  isPhoneVerified: boolean | null;
  isVerified: boolean | null;
  language: string | null;
  lastName: string | null;
  likes?: Array<Like>;
  locations?: Array<Location>;
  mediaItems?: Array<Media>;
  name: string | null;
  notifications?: Array<Notification>;
  otp: string | null;
  passwordhash: string | null;
  phone: string | null;
  polls?: Array<Poll>;
  posts?: Array<Post>;
  receivedMessages?: Array<Message>;
  reports?: Array<Report>;
  roles: JsonValue;
  sentMessages?: Array<Message>;
  shares?: Array<Share>;
  ticketCanvasItems?: Array<TicketCanvas>;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  username: string;
  voteEvents?: Array<VoteEvent>;
};
