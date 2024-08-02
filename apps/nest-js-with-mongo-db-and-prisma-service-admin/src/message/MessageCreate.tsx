import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { MediaTitle } from "../media/MediaTitle";
import { UserTitle } from "../user/UserTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <BooleanInput label="isDeleted" source="isDeleted" />
        <BooleanInput label="isRead" source="isRead" />
        <BooleanInput label="isReceived" source="isReceived" />
        <ReferenceArrayInput
          source="mediaItems"
          reference="Media"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="receiver.id" reference="User" label="receiver">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="sender.id" reference="User" label="sender">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
