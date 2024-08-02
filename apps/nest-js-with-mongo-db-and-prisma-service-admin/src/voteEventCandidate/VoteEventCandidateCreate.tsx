import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MediaTitle } from "../media/MediaTitle";
import { UserTitle } from "../user/UserTitle";
import { VoteEventTitle } from "../voteEvent/VoteEventTitle";
import { VoteTitle } from "../vote/VoteTitle";

export const VoteEventCandidateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="candidacyPhoto.id"
          reference="Media"
          label="candidacyPhoto"
        >
          <SelectInput optionText={MediaTitle} />
        </ReferenceInput>
        <TextInput label="candidateBio" source="candidateBio" />
        <TextInput label="candidateName" source="candidateName" />
        <ReferenceInput
          source="candidateProfile.id"
          reference="User"
          label="candidateProfile"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="candidateUsername" source="candidateUsername" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <ReferenceArrayInput
          source="media"
          reference="Media"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="voteEvent.id"
          reference="VoteEvent"
          label="VoteEvent"
        >
          <SelectInput optionText={VoteEventTitle} />
        </ReferenceInput>
        <ReferenceInput source="votes.id" reference="Vote" label="Votes">
          <SelectInput optionText={VoteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
