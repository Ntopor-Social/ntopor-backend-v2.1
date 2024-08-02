import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { TICKETPACKAGE_TITLE_FIELD } from "../ticketPackage/TicketPackageTitle";

export const TicketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
