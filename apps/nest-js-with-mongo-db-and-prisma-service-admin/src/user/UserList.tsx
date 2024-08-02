import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { VOTE_TITLE_FIELD } from "../vote/VoteTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="account_verification" source="accountVerification" />
        <TextField label="bio" source="bio" />
        <TextField label="blocked" source="blocked" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="devices" source="devices" />
        <TextField label="dob" source="dob" />
        <TextField label="Email" source="email" />
        <TextField label="enterprise_location" source="enterpriseLocation" />
        <TextField label="enterprise_name" source="enterpriseName" />
        <ReferenceField label="eventVotes" source="vote.id" reference="Vote">
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
    </List>
  );
};
