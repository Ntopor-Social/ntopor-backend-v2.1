import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { POST_TITLE_FIELD } from "../post/PostTitle";

export const PollingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pollings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="meta" source="meta" />
        <ReferenceField label="post" source="post.id" reference="Post">
          <TextField source={POST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startDate" source="startDate" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
