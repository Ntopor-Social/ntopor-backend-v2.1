import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { MediaTitle } from "../media/MediaTitle";
import { UserTitle } from "../user/UserTitle";
import { TicketPackageTitle } from "../ticketPackage/TicketPackageTitle";
import { TicketTitle } from "../ticket/TicketTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="accumulated" source="accumulated" />
        <NumberInput label="balance" source="balance" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <TextInput label="eventBio" source="eventBio" />
        <DateTimeInput label="eventDate" source="eventDate" />
        <TextInput label="eventLink" source="eventLink" />
        <TextInput label="eventLocation" source="eventLocation" />
        <TextInput label="eventName" source="eventName" />
        <SelectInput
          source="eventPriceType"
          label="eventPriceType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="eventType"
          label="eventType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="featuredImage" source="featuredImage" />
        <TextInput label="galerry" source="galerry" />
        <TextInput label="gallery" source="gallery" />
        <BooleanInput label="isActive" source="isActive" />
        <BooleanInput label="isFeatured" source="isFeatured" />
        <BooleanInput label="isPrivate" source="isPrivate" />
        <BooleanInput label="isTicketAvailable" source="isTicketAvailable" />
        <ReferenceArrayInput
          source="mediaItems"
          reference="Media"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="organizer.id"
          reference="User"
          label="organizer"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="ticketAvailableCount" source="ticketAvailableCount" />
        <TextInput label="ticketCount" source="ticketCount" />
        <ReferenceArrayInput
          source="ticketPackages"
          reference="TicketPackage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketPackageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
        <TextInput label="ticketsSold" source="ticketsSold" />
      </SimpleForm>
    </Edit>
  );
};
