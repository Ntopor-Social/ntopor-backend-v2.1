import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { POST_TITLE_FIELD } from "../post/PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
