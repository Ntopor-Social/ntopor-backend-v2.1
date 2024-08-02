import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { EventTitle } from "../event/EventTitle";
import { MessageTitle } from "../message/MessageTitle";
import { PostTitle } from "../post/PostTitle";
import { UserTitle } from "../user/UserTitle";
import { VoteEventTitle } from "../voteEvent/VoteEventTitle";
import { VoteEventCandidateTitle } from "../voteEventCandidate/VoteEventCandidateTitle";

export const MediaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="comment.id" reference="Comment" label="Comment">
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <TextInput label="duration" source="duration" />
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="height" source="height" />
        <ReferenceInput source="message.id" reference="Message" label="Message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <TextInput label="meta" source="meta" />
        <SelectInput
          source="metaType"
          label="metaType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="post.id" reference="Post" label="Post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <TextInput label="thumbnail" source="thumbnail" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="url" source="url" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="voteEvent.id"
          reference="VoteEvent"
          label="VoteEvent"
        >
          <SelectInput optionText={VoteEventTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="voteEventCandidate.id"
          reference="VoteEventCandidate"
          label="VoteEventCandidate"
        >
          <SelectInput optionText={VoteEventCandidateTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="voteEventCandidateMedia.id"
          reference="VoteEventCandidate"
          label="VoteEventCandidateMedia"
        >
          <SelectInput optionText={VoteEventCandidateTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="width" source="width" />
      </SimpleForm>
    </Create>
  );
};
