import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { TICKETPACKAGE_TITLE_FIELD } from "./TicketPackageTitle";

export const TicketPackageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Ticket" target="tickets" label="Tickets">
          <Datagrid rowClick="show">
            <ReferenceField label="boughtBy" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <ReferenceField label="event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="eventDateTime" source="eventDateTime" />
            <TextField label="ID" source="id" />
            <BooleanField label="isTicketActive" source="isTicketActive" />
            <TextField label="ticketOwnersMeta" source="ticketOwnersMeta" />
            <ReferenceField
              label="ticketType"
              source="ticketpackage.id"
              reference="TicketPackage"
            >
              <TextField source={TICKETPACKAGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
