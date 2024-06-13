import { ScheduleCreateNestedManyWithoutClientsInput } from "./ScheduleCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  schedules?: ScheduleCreateNestedManyWithoutClientsInput;
};
