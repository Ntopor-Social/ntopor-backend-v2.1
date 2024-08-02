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
import { MESSAGE_TITLE_FIELD } from "./MessageTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VOTEEVENT_TITLE_FIELD } from "../voteEvent/VoteEventTitle";
import { VOTEEVENTCANDIDATE_TITLE_FIELD } from "../voteEventCandidate/VoteEventCandidateTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isDeleted" source="isDeleted" />
        <BooleanField label="isRead" source="isRead" />
        <BooleanField label="isReceived" source="isReceived" />
        <ReferenceField label="receiver" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="sender" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Media"
          target="messageId"
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
      </SimpleShowLayout>
    </Show>
  );
};
