import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { POST_TITLE_FIELD } from "./PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { VOTEEVENT_TITLE_FIELD } from "../voteEvent/VoteEventTitle";
import { VOTEEVENTCANDIDATE_TITLE_FIELD } from "../voteEventCandidate/VoteEventCandidateTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const PostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="hashtags" source="hashtags" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBlocked" source="isBlocked" />
        <BooleanField label="isEvent" source="isEvent" />
        <BooleanField label="isMedia" source="isMedia" />
        <BooleanField label="isPolling" source="isPolling" />
        <BooleanField label="isPromoted" source="isPromoted" />
        <BooleanField label="isVoteEvent" source="isVoteEvent" />
        <TextField label="linkedEvent" source="linkedEvent" />
        <TextField label="linkedEventType" source="linkedEventType" />
        <ReferenceField
          label="location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="mentioned" source="mentioned" />
        <TextField label="postDescription" source="postDescription" />
        <TextField label="postType" source="postType" />
        <TextField label="tagged" source="tagged" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Comment"
          target="postId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="commentContent" source="commentContent" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="hashtags" source="hashtags" />
            <TextField label="ID" source="id" />
            <BooleanField label="isMedia" source="isMedia" />
            <TextField label="meta" source="meta" />
            <TextField label="metaType" source="metaType" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="tagged" source="tagged" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Like" target="postId" label="Likes">
          <Datagrid rowClick="show">
            <ReferenceField
              label="comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <TextField label="meta" source="meta" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Media"
          target="postId"
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
          reference="Polling"
          target="postId"
          label="Pollings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <TextField label="meta" source="meta" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Report" target="postId" label="Reports">
          <Datagrid rowClick="show">
            <ReferenceField
              label="comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <TextField label="meta" source="meta" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Share" target="postId" label="Shares">
          <Datagrid rowClick="show">
            <ReferenceField
              label="comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
