import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TicketCanvasEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="canvasType"
          label="canvasType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <NumberInput label="price" source="price" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
