import { SortOrder } from "../../util/SortOrder";

export type VoteEventOrderByInput = {
  accumulated?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  dateCreated?: SortOrder;
  endDate?: SortOrder;
  eventBio?: SortOrder;
  eventLink?: SortOrder;
  eventName?: SortOrder;
  eventPriceType?: SortOrder;
  gallery?: SortOrder;
  id?: SortOrder;
  isFeatured?: SortOrder;
  isPrivate?: SortOrder;
  voteEvents?: SortOrder;
  startDate?: SortOrder;
  ticketsSold?: SortOrder;
  updatedAt?: SortOrder;
  voteLimit?: SortOrder;
  votePrice?: SortOrder;
  votesAvailable?: SortOrder;
  votesPerUser?: SortOrder;
};
