import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="actionRequired" source="actionRequired" />
        <TextInput label="content" source="content" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <BooleanInput label="isViewed" source="isViewed" />
        <SelectInput
          source="metaType"
          label="metaType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
