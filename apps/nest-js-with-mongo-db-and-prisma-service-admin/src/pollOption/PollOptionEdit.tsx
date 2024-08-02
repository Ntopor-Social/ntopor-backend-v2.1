import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PollingTitle } from "../polling/PollingTitle";
import { PollTitle } from "../poll/PollTitle";

export const PollOptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <ReferenceInput source="polling.id" reference="Polling" label="Polling">
          <SelectInput optionText={PollingTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="polls"
          reference="Poll"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PollTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
