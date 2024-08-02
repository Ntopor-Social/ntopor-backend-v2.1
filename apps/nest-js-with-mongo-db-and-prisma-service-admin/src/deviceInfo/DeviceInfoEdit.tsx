import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const DeviceInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
