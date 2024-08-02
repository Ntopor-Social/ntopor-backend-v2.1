import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MEDIA_TITLE_FIELD } from "../media/MediaTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { VOTEEVENT_TITLE_FIELD } from "../voteEvent/VoteEventTitle";
import { VOTE_TITLE_FIELD } from "../vote/VoteTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { VOTEEVENTCANDIDATE_TITLE_FIELD } from "../voteEventCandidate/VoteEventCandidateTitle";
import { POLLOPTION_TITLE_FIELD } from "../pollOption/PollOptionTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";
import { TICKETPACKAGE_TITLE_FIELD } from "../ticketPackage/TicketPackageTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="VoteEventCandidate"
          target="candidateProfileId"
          label="VoteEventCandidates"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="candidacyPhoto"
              source="media.id"
              reference="Media"
            >
              <TextField source={MEDIA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="candidateBio" source="candidateBio" />
            <TextField label="candidateName" source="candidateName" />
            <ReferenceField
              label="candidateProfile"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="candidateUsername" source="candidateUsername" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="VoteEvent"
              source="voteevent.id"
              reference="VoteEvent"
            >
              <TextField source={VOTEEVENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Votes" source="vote.id" reference="Vote">
              <TextField source={VOTE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Comment"
          target="userId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="commentContent" source="commentContent" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="hashtags" source="hashtags" />
            <TextField label="ID" source="id" />
            <BooleanField label="isMedia" source="isMedia" />
            <TextField label="meta" source="meta" />
            <TextField label="metaType" source="metaType" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="tagged" source="tagged" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DeviceInfo"
          target="userId"
          label="DeviceInfos"
        >
          <Datagrid rowClick="show">
            <TextField label="appVersion" source="appVersion" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="deviceLanguage" source="deviceLanguage" />
            <TextField label="deviceMemory" source="deviceMemory" />
            <TextField label="deviceModel" source="deviceModel" />
            <TextField label="deviceType" source="deviceType" />
            <TextField label="deviceVersion" source="deviceVersion" />
            <TextField label="expoToken" source="expoToken" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Event" target="events" label="Events">
          <Datagrid rowClick="show">
            <TextField label="accumulated" source="accumulated" />
            <TextField label="balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="eventBio" source="eventBio" />
            <TextField label="eventDate" source="eventDate" />
            <TextField label="eventLink" source="eventLink" />
            <TextField label="eventLocation" source="eventLocation" />
            <TextField label="eventName" source="eventName" />
            <TextField label="eventPriceType" source="eventPriceType" />
            <TextField label="eventType" source="eventType" />
            <TextField label="featuredImage" source="featuredImage" />
            <TextField label="galerry" source="galerry" />
            <TextField label="gallery" source="gallery" />
            <TextField label="ID" source="id" />
            <BooleanField label="isActive" source="isActive" />
            <BooleanField label="isFeatured" source="isFeatured" />
            <BooleanField label="isPrivate" source="isPrivate" />
            <BooleanField
              label="isTicketAvailable"
              source="isTicketAvailable"
            />
            <ReferenceField label="organizer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="ticketAvailableCount"
              source="ticketAvailableCount"
            />
            <TextField label="ticketCount" source="ticketCount" />
            <TextField label="ticketsSold" source="ticketsSold" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Like" target="userId" label="Likes">
          <Datagrid rowClick="show">
            <ReferenceField
              label="comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <TextField label="meta" source="meta" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Location"
          target="userId"
          label="Locations"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Media"
          target="userId"
          label="MediaItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="duration" source="duration" />
            <ReferenceField label="Event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="height" source="height" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Message"
              source="message.id"
              reference="Message"
            >
              <TextField source={MESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="meta" source="meta" />
            <TextField label="metaType" source="metaType" />
            <ReferenceField label="Post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="thumbnail" source="thumbnail" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="VoteEvent"
              source="voteevent.id"
              reference="VoteEvent"
            >
              <TextField source={VOTEEVENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="VoteEventCandidate"
              source="voteeventcandidate.id"
              reference="VoteEventCandidate"
            >
              <TextField source={VOTEEVENTCANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="VoteEventCandidateMedia"
              source="voteeventcandidate.id"
              reference="VoteEventCandidate"
            >
              <TextField source={VOTEEVENTCANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="width" source="width" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="userId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <BooleanField label="actionRequired" source="actionRequired" />
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <BooleanField label="isViewed" source="isViewed" />
            <TextField label="metaType" source="metaType" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Poll" target="votedPolls" label="Polls">
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
        <ReferenceManyField reference="Post" target="userId" label="Posts">
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
        <ReferenceManyField
          reference="Message"
          target="receivedMessages"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isDeleted" source="isDeleted" />
            <BooleanField label="isRead" source="isRead" />
            <BooleanField label="isReceived" source="isReceived" />
            <ReferenceField label="receiver" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="sender" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Report" target="userId" label="Reports">
          <Datagrid rowClick="show">
            <ReferenceField
              label="comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <TextField label="meta" source="meta" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="sentMessages"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isDeleted" source="isDeleted" />
            <BooleanField label="isRead" source="isRead" />
            <BooleanField label="isReceived" source="isReceived" />
            <ReferenceField label="receiver" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="sender" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Share" target="userId" label="Shares">
          <Datagrid rowClick="show">
            <ReferenceField
              label="comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <ReferenceField label="post" source="post.id" reference="Post">
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TicketCanvas"
          target="userId"
          label="TicketCanvasItems"
        >
          <Datagrid rowClick="show">
            <TextField label="canvasType" source="canvasType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="currency" source="currency" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="ID" source="id" />
            <TextField label="price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Ticket"
          target="BoughtBy"
          label="Tickets"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="VoteEvent"
          target="voteEvents"
          label="VoteEvents"
        >
          <Datagrid rowClick="show">
            <TextField label="accumulated" source="accumulated" />
            <TextField label="balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="currency" source="currency" />
            <TextField label="dateCreated" source="dateCreated" />
            <TextField label="endDate" source="endDate" />
            <TextField label="eventBio" source="eventBio" />
            <TextField label="eventLink" source="eventLink" />
            <TextField label="eventName" source="eventName" />
            <TextField label="eventPriceType" source="eventPriceType" />
            <TextField label="gallery" source="gallery" />
            <TextField label="ID" source="id" />
            <BooleanField label="isFeatured" source="isFeatured" />
            <BooleanField label="isPrivate" source="isPrivate" />
            <ReferenceField label="organizer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <TextField label="ticketsSold" source="ticketsSold" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="voteLimit" source="voteLimit" />
            <TextField label="votePrice" source="votePrice" />
            <TextField label="votesAvailable" source="votesAvailable" />
            <TextField label="votesPerUser" source="votesPerUser" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
