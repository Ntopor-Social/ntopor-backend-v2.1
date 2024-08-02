import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { LikeTitle } from "../like/LikeTitle";
import { LocationTitle } from "../location/LocationTitle";
import { MediaTitle } from "../media/MediaTitle";
import { PollingTitle } from "../polling/PollingTitle";
import { ReportTitle } from "../report/ReportTitle";
import { ShareTitle } from "../share/ShareTitle";
import { UserTitle } from "../user/UserTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="hashtags" multiline source="hashtags" />
        <BooleanInput label="isBlocked" source="isBlocked" />
        <BooleanInput label="isEvent" source="isEvent" />
        <BooleanInput label="isMedia" source="isMedia" />
        <BooleanInput label="isPolling" source="isPolling" />
        <BooleanInput label="isPromoted" source="isPromoted" />
        <BooleanInput label="isVoteEvent" source="isVoteEvent" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <TextInput label="linkedEvent" source="linkedEvent" />
        <SelectInput
          source="linkedEventType"
          label="linkedEventType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="mediaItems"
          reference="Media"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaTitle} />
        </ReferenceArrayInput>
        <TextInput label="mentioned" source="mentioned" />
        <ReferenceArrayInput
          source="pollings"
          reference="Polling"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PollingTitle} />
        </ReferenceArrayInput>
        <TextInput label="postDescription" source="postDescription" />
        <TextInput label="postType" source="postType" />
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="shares"
          reference="Share"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShareTitle} />
        </ReferenceArrayInput>
        <TextInput label="tagged" source="tagged" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
