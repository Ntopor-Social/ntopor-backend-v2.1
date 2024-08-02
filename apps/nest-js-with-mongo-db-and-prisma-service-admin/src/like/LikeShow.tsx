import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { POST_TITLE_FIELD } from "../post/PostTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LikeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="comment" source="comment.id" reference="Comment">
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
      </SimpleShowLayout>
    </Show>
  );
};
