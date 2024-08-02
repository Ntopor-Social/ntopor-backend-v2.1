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

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="accumulated" source="accumulated" />
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="eventBio" source="eventBio" />
        <TextField label="eventDate" source="eventDate" />
        <TextField label="eventLink" source="eventLink" />
        <TextField label="eventLocation" source="eventLocation" />
        <TextField label="eventName" source="eventName" />
        <TextField label="eventPriceType" source="eventPriceType" />
        <TextField label="eventType" source="eventType" />
        <TextField label="featuredImage" source="featuredImage" />
        <TextField label="galerry" source="galerry" />
        <TextField label="gallery" source="gallery" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <BooleanField label="isFeatured" source="isFeatured" />
        <BooleanField label="isPrivate" source="isPrivate" />
        <BooleanField label="isTicketAvailable" source="isTicketAvailable" />
        <ReferenceField label="organizer" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ticketAvailableCount" source="ticketAvailableCount" />
        <TextField label="ticketCount" source="ticketCount" />
        <TextField label="ticketsSold" source="ticketsSold" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
