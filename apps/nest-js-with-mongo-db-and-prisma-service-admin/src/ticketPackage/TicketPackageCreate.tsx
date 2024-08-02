import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const TicketPackageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <TextInput
          label="packageDescription"
          multiline
          source="packageDescription"
        />
        <TextInput label="packageName" source="packageName" />
        <NumberInput step={1} label="packageSize" source="packageSize" />
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
