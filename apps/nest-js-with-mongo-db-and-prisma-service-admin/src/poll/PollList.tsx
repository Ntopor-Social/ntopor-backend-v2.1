import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POLLOPTION_TITLE_FIELD } from "../pollOption/PollOptionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PollList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Polls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="ID" source="id" />
        <TextField label="packageDescription" source="packageDescription" />
        <TextField label="packageName" source="packageName" />
        <TextField label="packageSize" source="packageSize" />
        <ReferenceField
          label="pollOption"
          source="polloption.id"
          reference="PollOption"
        >
          <TextField source={POLLOPTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="voter" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
