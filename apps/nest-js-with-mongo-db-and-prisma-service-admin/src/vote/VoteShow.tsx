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

import { VOTE_TITLE_FIELD } from "./VoteTitle";
import { VOTEEVENTCANDIDATE_TITLE_FIELD } from "../voteEventCandidate/VoteEventCandidateTitle";

export const VoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="candidate" source="candidate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="ID" source="id" />
        <TextField label="paid" source="paid" />
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="voteEventCandidate"
          source="voteeventcandidate.id"
          reference="VoteEventCandidate"
        >
          <TextField source={VOTEEVENTCANDIDATE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="User"
          target="eventVotesId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <TextField
              label="account_verification"
              source="accountVerification"
            />
            <TextField label="bio" source="bio" />
            <TextField label="blocked" source="blocked" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="devices" source="devices" />
            <TextField label="dob" source="dob" />
            <TextField label="Email" source="email" />
            <TextField
              label="enterprise_location"
              source="enterpriseLocation"
            />
            <TextField label="enterprise_name" source="enterpriseName" />
            <ReferenceField
              label="eventVotes"
              source="vote.id"
              reference="Vote"
            >
              <TextField source={VOTE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <BooleanField label="isAccountActive" source="isAccountActive" />
            <BooleanField label="isAdmin" source="isAdmin" />
            <BooleanField label="isAppleAuth" source="isAppleAuth" />
            <BooleanField label="isBlocked" source="isBlocked" />
            <BooleanField label="isEmailVerified" source="isEmailVerified" />
            <BooleanField label="isGoogleAuth" source="isGoogleAuth" />
            <BooleanField label="isPhoneVerified" source="isPhoneVerified" />
            <BooleanField label="isVerified" source="isVerified" />
            <TextField label="language" source="language" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="name" source="name" />
            <TextField label="otp" source="otp" />
            <TextField label="passwordhash" source="passwordhash" />
            <TextField label="phone" source="phone" />
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
