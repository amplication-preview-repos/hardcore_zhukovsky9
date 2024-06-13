import { ScheduleUpdateManyWithoutClientsInput } from "./ScheduleUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  schedules?: ScheduleUpdateManyWithoutClientsInput;
};
