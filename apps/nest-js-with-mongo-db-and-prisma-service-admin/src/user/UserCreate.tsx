import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  PasswordInput,
} from "react-admin";

import { VoteEventCandidateTitle } from "../voteEventCandidate/VoteEventCandidateTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { DeviceInfoTitle } from "../deviceInfo/DeviceInfoTitle";
import { VoteTitle } from "../vote/VoteTitle";
import { EventTitle } from "../event/EventTitle";
import { TicketTitle } from "../ticket/TicketTitle";
import { LikeTitle } from "../like/LikeTitle";
import { LocationTitle } from "../location/LocationTitle";
import { MediaTitle } from "../media/MediaTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { PollTitle } from "../poll/PollTitle";
import { PostTitle } from "../post/PostTitle";
import { MessageTitle } from "../message/MessageTitle";
import { ReportTitle } from "../report/ReportTitle";
import { ShareTitle } from "../share/ShareTitle";
import { TicketCanvasTitle } from "../ticketCanvas/TicketCanvasTitle";
import { VoteEventTitle } from "../voteEvent/VoteEventTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="account_verification" source="accountVerification" />
        <TextInput label="bio" source="bio" />
        <TextInput label="blocked" source="blocked" />
        <ReferenceArrayInput
          source="candidateProfiles"
          reference="VoteEventCandidate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VoteEventCandidateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <ReferenceArrayInput
          source="deviceInfos"
          reference="DeviceInfo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeviceInfoTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          label="devices"
          source="devices"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="dob" source="dob" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="enterprise_location" source="enterpriseLocation" />
        <TextInput label="enterprise_name" source="enterpriseName" />
        <ReferenceInput
          source="eventVotes.id"
          reference="Vote"
          label="eventVotes"
        >
          <SelectInput optionText={VoteTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="events"
          reference="Event"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTitle} />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="groupTickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="isAccountActive" source="isAccountActive" />
        <BooleanInput label="isAdmin" source="isAdmin" />
        <BooleanInput label="isAppleAuth" source="isAppleAuth" />
        <BooleanInput label="isBlocked" source="isBlocked" />
        <BooleanInput label="isEmailVerified" source="isEmailVerified" />
        <BooleanInput label="isGoogleAuth" source="isGoogleAuth" />
        <BooleanInput label="isPhoneVerified" source="isPhoneVerified" />
        <BooleanInput label="isVerified" source="isVerified" />
        <TextInput label="language" source="language" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="locations"
          reference="Location"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LocationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mediaItems"
          reference="Media"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="otp" source="otp" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="passwordhash" source="passwordhash" />
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="polls"
          reference="Poll"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PollTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="posts"
          reference="Post"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PostTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="receivedMessages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="sentMessages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="shares"
          reference="Share"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShareTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ticketCanvasItems"
          reference="TicketCanvas"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketCanvasTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tickets"
          reference="Ticket"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TicketTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="voteEvents"
          reference="VoteEvent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VoteEventTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
