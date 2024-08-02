import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PollOptionTitle } from "../pollOption/PollOptionTitle";
import { UserTitle } from "../user/UserTitle";

export const PollCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <TextInput
          label="packageDescription"
          multiline
          source="packageDescription"
        />
        <TextInput label="packageName" source="packageName" />
        <NumberInput step={1} label="packageSize" source="packageSize" />
        <ReferenceInput
          source="pollOption.id"
          reference="PollOption"
          label="pollOption"
        >
          <SelectInput optionText={PollOptionTitle} />
        </ReferenceInput>
        <ReferenceInput source="voter.id" reference="User" label="voter">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
