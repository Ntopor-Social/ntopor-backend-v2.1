import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EventTitle } from "../event/EventTitle";
import { TicketPackageTitle } from "../ticketPackage/TicketPackageTitle";

export const TicketEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="boughtBy.id" reference="User" label="boughtBy">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <DateTimeInput label="eventDateTime" source="eventDateTime" />
        <BooleanInput label="isTicketActive" source="isTicketActive" />
        <ReferenceArrayInput
          source="ticketOwners"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <div />
        <ReferenceInput
          source="ticketType.id"
          reference="TicketPackage"
          label="ticketType"
        >
          <SelectInput optionText={TicketPackageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
