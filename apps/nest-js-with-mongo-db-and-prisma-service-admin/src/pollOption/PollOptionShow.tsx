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
} from "react-admin";

import { POLLOPTION_TITLE_FIELD } from "./PollOptionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { POLLING_TITLE_FIELD } from "../polling/PollingTitle";

export const PollOptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Polling" source="polling.id" reference="Polling">
          <TextField source={POLLING_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Poll"
          target="pollOptionId"
          label="Polls"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="currency" source="currency" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <TextField label="packageDescription" source="packageDescription" />
            <TextField label="packageName" source="packageName" />
            <TextField label="packageSize" source="packageSize" />
            <ReferenceField
              label="pollOption"
              source="polloption.id"
              reference="PollOption"
            >
              <TextField source={POLLOPTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="voter" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
