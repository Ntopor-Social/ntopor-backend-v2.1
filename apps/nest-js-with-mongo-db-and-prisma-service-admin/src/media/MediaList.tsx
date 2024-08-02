import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VOTEEVENT_TITLE_FIELD } from "../voteEvent/VoteEventTitle";
import { VOTEEVENTCANDIDATE_TITLE_FIELD } from "../voteEventCandidate/VoteEventCandidateTitle";

export const MediaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MediaItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Comment" source="comment.id" reference="Comment">
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
        <ReferenceField label="Message" source="message.id" reference="Message">
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
    </List>
  );
};
