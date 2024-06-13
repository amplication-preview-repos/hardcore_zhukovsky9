import { Schedule } from "../schedule/Schedule";

export type Client = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  schedules?: Array<Schedule>;
  updatedAt: Date;
};
