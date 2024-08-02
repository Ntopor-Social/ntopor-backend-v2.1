import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { LOCATION_TITLE_FIELD } from "./LocationTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="ID" source="id" />
        <TextField label="lat" source="lat" />
        <TextField label="lng" source="lng" />
        <TextField label="meta" source="meta" />
        <TextField label="meta_type" source="metaType" />
        <TextField label="place" source="place" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="zip" source="zip" />
        <ReferenceManyField reference="Post" target="locationId" label="Posts">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
