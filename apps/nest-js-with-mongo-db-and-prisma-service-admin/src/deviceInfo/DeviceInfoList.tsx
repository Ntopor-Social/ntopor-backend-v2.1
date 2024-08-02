import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DeviceInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeviceInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
