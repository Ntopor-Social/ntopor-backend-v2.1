import { Post } from "../post/Post";
import { User } from "../user/User";

export type Location = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  dateCreated: Date | null;
  id: string;
  lat: string | null;
  lng: string | null;
  meta: string | null;
  metaType?: "Option1" | null;
  place: string | null;
  posts?: Array<Post>;
  state: string | null;
  updatedAt: Date;
  user?: User | null;
  zip: string | null;
};
