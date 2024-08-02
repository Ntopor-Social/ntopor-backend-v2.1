import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MEDIA_TITLE_FIELD } from "../media/MediaTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { VOTEEVENT_TITLE_FIELD } from "../voteEvent/VoteEventTitle";
import { VOTE_TITLE_FIELD } from "../vote/VoteTitle";

export const VoteEventCandidateList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VoteEventCandidates"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
