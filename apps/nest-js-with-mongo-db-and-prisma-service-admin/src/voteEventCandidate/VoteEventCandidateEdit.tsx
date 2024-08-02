import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
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

export const VoteEventCandidateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
