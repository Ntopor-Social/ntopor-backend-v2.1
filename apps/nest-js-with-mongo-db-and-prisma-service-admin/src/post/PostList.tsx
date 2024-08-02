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
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Posts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="hashtags" source="hashtags" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBlocked" source="isBlocked" />
        <BooleanField label="isEvent" source="isEvent" />
        <BooleanField label="isMedia" source="isMedia" />
        <BooleanField label="isPolling" source="isPolling" />
        <BooleanField label="isPromoted" source="isPromoted" />
        <BooleanField label="isVoteEvent" source="isVoteEvent" />
        <TextField label="linkedEvent" source="linkedEvent" />
        <TextField label="linkedEventType" source="linkedEventType" />
        <ReferenceField
          label="location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="mentioned" source="mentioned" />
        <TextField label="postDescription" source="postDescription" />
        <TextField label="postType" source="postType" />
        <TextField label="tagged" source="tagged" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
