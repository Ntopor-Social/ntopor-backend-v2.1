import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { MediaTitle } from "../media/MediaTitle";
import { UserTitle } from "../user/UserTitle";
import { VoteEventCandidateTitle } from "../voteEventCandidate/VoteEventCandidateTitle";

export const VoteEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="accumulated" source="accumulated" />
        <NumberInput step={1} label="balance" source="balance" />
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="eventBio" source="eventBio" />
        <TextInput label="eventLink" source="eventLink" />
        <TextInput label="eventName" source="eventName" />
        <SelectInput
          source="eventPriceType"
          label="eventPriceType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="gallery" source="gallery" />
        <BooleanInput label="isFeatured" source="isFeatured" />
        <BooleanInput label="isPrivate" source="isPrivate" />
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
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="ticketsSold" source="ticketsSold" />
        <ReferenceArrayInput
          source="voteEventCandidates"
          reference="VoteEventCandidate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VoteEventCandidateTitle} />
        </ReferenceArrayInput>
        <TextInput label="voteLimit" source="voteLimit" />
        <NumberInput step={1} label="votePrice" source="votePrice" />
        <NumberInput step={1} label="votesAvailable" source="votesAvailable" />
        <TextInput label="votesPerUser" source="votesPerUser" />
      </SimpleForm>
    </Edit>
  );
};
