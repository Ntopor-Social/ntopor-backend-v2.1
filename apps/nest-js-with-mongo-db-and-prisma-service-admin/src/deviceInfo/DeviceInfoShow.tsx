import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DeviceInfoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="appVersion" source="appVersion" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deviceLanguage" source="deviceLanguage" />
        <TextField label="deviceMemory" source="deviceMemory" />
        <TextField label="deviceModel" source="deviceModel" />
        <TextField label="deviceType" source="deviceType" />
        <TextField label="deviceVersion" source="deviceVersion" />
        <TextField label="expoToken" source="expoToken" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
