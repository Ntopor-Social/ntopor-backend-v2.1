import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VOTEEVENT_TITLE_FIELD } from "./VoteEventTitle";
import { VOTEEVENTCANDIDATE_TITLE_FIELD } from "../voteEventCandidate/VoteEventCandidateTitle";
import { MEDIA_TITLE_FIELD } from "../media/MediaTitle";
import { VOTE_TITLE_FIELD } from "../vote/VoteTitle";

export const VoteEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accumulated" source="accumulated" />
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="endDate" source="endDate" />
        <TextField label="eventBio" source="eventBio" />
        <TextField label="eventLink" source="eventLink" />
        <TextField label="eventName" source="eventName" />
        <TextField label="eventPriceType" source="eventPriceType" />
        <TextField label="gallery" source="gallery" />
        <TextField label="ID" source="id" />
        <BooleanField label="isFeatured" source="isFeatured" />
        <BooleanField label="isPrivate" source="isPrivate" />
        <ReferenceField label="organizer" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startDate" source="startDate" />
        <TextField label="ticketsSold" source="ticketsSold" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voteLimit" source="voteLimit" />
        <TextField label="votePrice" source="votePrice" />
        <TextField label="votesAvailable" source="votesAvailable" />
        <TextField label="votesPerUser" source="votesPerUser" />
        <ReferenceManyField
          reference="Media"
          target="voteEventId"
          label="MediaItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="duration" source="duration" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="height" source="height" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Message"
              source="message.id"
              reference="Message"
            >
              <TextField source={MESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="meta" source="meta" />
            <TextField label="metaType" source="metaType" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="thumbnail" source="thumbnail" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="VoteEvent"
              source="voteevent.id"
              reference="VoteEvent"
            >
              <TextField source={VOTEEVENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="VoteEventCandidate"
              source="voteeventcandidate.id"
              reference="VoteEventCandidate"
            >
              <TextField source={VOTEEVENTCANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="VoteEventCandidateMedia"
              source="voteeventcandidate.id"
              reference="VoteEventCandidate"
            >
              <TextField source={VOTEEVENTCANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="width" source="width" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="VoteEventCandidate"
          target="voteEventId"
          label="VoteEventCandidates"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="candidacyPhoto"
              source="media.id"
              reference="Media"
            >
              <TextField source={MEDIA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="candidateBio" source="candidateBio" />
            <TextField label="candidateName" source="candidateName" />
            <ReferenceField
              label="candidateProfile"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="candidateUsername" source="candidateUsername" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="VoteEvent"
              source="voteevent.id"
              reference="VoteEvent"
            >
              <TextField source={VOTEEVENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Votes" source="vote.id" reference="Vote">
              <TextField source={VOTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
