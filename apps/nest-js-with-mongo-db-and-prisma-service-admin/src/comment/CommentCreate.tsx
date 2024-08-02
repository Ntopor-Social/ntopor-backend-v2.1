import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { LikeTitle } from "../like/LikeTitle";
import { MediaTitle } from "../media/MediaTitle";
import { PostTitle } from "../post/PostTitle";
import { ReportTitle } from "../report/ReportTitle";
import { ShareTitle } from "../share/ShareTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="commentContent" source="commentContent" />
        <DateTimeInput label="date" source="date" />
        <SelectInput
          source="hashtags"
          label="hashtags"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="isMedia" source="isMedia" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="mediaItems"
          reference="Media"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MediaTitle} />
        </ReferenceArrayInput>
        <TextInput label="meta" source="meta" />
        <SelectInput
          source="metaType"
          label="metaType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="post.id" reference="Post" label="post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
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
    </Create>
  );
};
