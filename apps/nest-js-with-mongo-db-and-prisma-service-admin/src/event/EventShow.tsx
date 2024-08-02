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
import { EVENT_TITLE_FIELD } from "./EventTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VOTEEVENT_TITLE_FIELD } from "../voteEvent/VoteEventTitle";
import { VOTEEVENTCANDIDATE_TITLE_FIELD } from "../voteEventCandidate/VoteEventCandidateTitle";
import { TICKETPACKAGE_TITLE_FIELD } from "../ticketPackage/TicketPackageTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accumulated" source="accumulated" />
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="eventBio" source="eventBio" />
        <TextField label="eventDate" source="eventDate" />
        <TextField label="eventLink" source="eventLink" />
        <TextField label="eventLocation" source="eventLocation" />
        <TextField label="eventName" source="eventName" />
        <TextField label="eventPriceType" source="eventPriceType" />
        <TextField label="eventType" source="eventType" />
        <TextField label="featuredImage" source="featuredImage" />
        <TextField label="galerry" source="galerry" />
        <TextField label="gallery" source="gallery" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <BooleanField label="isFeatured" source="isFeatured" />
        <BooleanField label="isPrivate" source="isPrivate" />
        <BooleanField label="isTicketAvailable" source="isTicketAvailable" />
        <ReferenceField label="organizer" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ticketAvailableCount" source="ticketAvailableCount" />
        <TextField label="ticketCount" source="ticketCount" />
        <TextField label="ticketsSold" source="ticketsSold" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Media"
          target="eventId"
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
          reference="TicketPackage"
          target="eventId"
          label="TicketPackages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="currency" source="currency" />
            <TextField label="dateCreated" source="dateCreated" />
            <ReferenceField label="event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="packageDescription" source="packageDescription" />
            <TextField label="packageName" source="packageName" />
            <TextField label="packageSize" source="packageSize" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Ticket" target="eventId" label="Tickets">
          <Datagrid rowClick="show">
            <ReferenceField label="boughtBy" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <ReferenceField label="event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="eventDateTime" source="eventDateTime" />
            <TextField label="ID" source="id" />
            <BooleanField label="isTicketActive" source="isTicketActive" />
            <TextField label="ticketOwnersMeta" source="ticketOwnersMeta" />
            <ReferenceField
              label="ticketType"
              source="ticketpackage.id"
              reference="TicketPackage"
            >
              <TextField source={TICKETPACKAGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
