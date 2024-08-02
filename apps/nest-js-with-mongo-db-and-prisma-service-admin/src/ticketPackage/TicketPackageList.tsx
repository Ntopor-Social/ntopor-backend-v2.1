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
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const TicketPackageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TicketPackages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="dateCreated" source="dateCreated" />
        <ReferenceField label="event" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="packageDescription" source="packageDescription" />
        <TextField label="packageName" source="packageName" />
        <TextField label="packageSize" source="packageSize" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
