import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { PostTitle } from "../post/PostTitle";
import { UserTitle } from "../user/UserTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <TextInput label="lat" source="lat" />
        <TextInput label="lng" source="lng" />
        <TextInput label="meta" source="meta" />
        <SelectInput
          source="metaType"
          label="meta_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="place" source="place" />
        <ReferenceArrayInput
          source="posts"
          reference="Post"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PostTitle} />
        </ReferenceArrayInput>
        <TextInput label="state" source="state" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
