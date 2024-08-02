import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VoteEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VoteEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="accumulated" source="accumulated" />
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="endDate" source="endDate" />
        <TextField label="eventBio" source="eventBio" />
        <TextField label="eventLink" source="eventLink" />
        <TextField label="eventName" source="eventName" />
        <TextField label="eventPriceType" source="eventPriceType" />
        <TextField label="gallery" source="gallery" />
        <TextField label="ID" source="id" />
        <BooleanField label="isFeatured" source="isFeatured" />
        <BooleanField label="isPrivate" source="isPrivate" />
        <ReferenceField label="organizer" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startDate" source="startDate" />
        <TextField label="ticketsSold" source="ticketsSold" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="voteLimit" source="voteLimit" />
        <TextField label="votePrice" source="votePrice" />
        <TextField label="votesAvailable" source="votesAvailable" />
        <TextField label="votesPerUser" source="votesPerUser" />
      </Datagrid>
    </List>
  );
};
