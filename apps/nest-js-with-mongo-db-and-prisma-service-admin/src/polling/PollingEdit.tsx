import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PollOptionTitle } from "../pollOption/PollOptionTitle";
import { PostTitle } from "../post/PostTitle";

export const PollingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <DateTimeInput label="endDate" source="endDate" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="meta" source="meta" />
        <ReferenceArrayInput
          source="pollOptions"
          reference="PollOption"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PollOptionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="post.id" reference="Post" label="post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
