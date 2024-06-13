import { Schedule } from "../schedule/Schedule";

export type LawnService = {
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  schedules?: Array<Schedule>;
  serviceName: string | null;
  updatedAt: Date;
};
