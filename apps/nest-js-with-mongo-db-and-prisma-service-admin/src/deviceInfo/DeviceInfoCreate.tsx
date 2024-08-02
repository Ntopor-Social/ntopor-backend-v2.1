import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const DeviceInfoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="appVersion" source="appVersion" />
        <TextInput label="deviceLanguage" source="deviceLanguage" />
        <TextInput label="deviceMemory" source="deviceMemory" />
        <TextInput label="deviceModel" source="deviceModel" />
        <TextInput label="deviceType" source="deviceType" />
        <TextInput label="deviceVersion" source="deviceVersion" />
        <TextInput label="expoToken" source="expoToken" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
