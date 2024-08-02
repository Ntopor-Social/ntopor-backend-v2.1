import { VoteEventCandidate as TVoteEventCandidate } from "../api/voteEventCandidate/VoteEventCandidate";

export const VOTEEVENTCANDIDATE_TITLE_FIELD = "candidateName";

export const VoteEventCandidateTitle = (
  record: TVoteEventCandidate
): string => {
  return record.candidateName?.toString() || String(record.id);
};
