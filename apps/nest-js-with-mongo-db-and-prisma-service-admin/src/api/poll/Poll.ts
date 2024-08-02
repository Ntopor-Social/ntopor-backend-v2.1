import { PollOption } from "../pollOption/PollOption";
import { User } from "../user/User";

export type Poll = {
  createdAt: Date;
  currency: string | null;
  dateCreated: Date | null;
  id: string;
  packageDescription: string | null;
  packageName: string | null;
  packageSize: number | null;
  pollOption?: PollOption | null;
  updatedAt: Date;
  voter?: User | null;
};
