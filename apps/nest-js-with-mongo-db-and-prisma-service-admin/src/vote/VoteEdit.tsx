import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VoteEventCandidateTitle } from "../voteEventCandidate/VoteEventCandidateTitle";
import { UserTitle } from "../user/UserTitle";

export const VoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="candidate" source="candidate" />
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <NumberInput step={1} label="paid" source="paid" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <ReferenceInput
          source="voteEventCandidate.id"
          reference="VoteEventCandidate"
          label="voteEventCandidate"
        >
          <SelectInput optionText={VoteEventCandidateTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="voter"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
