import { ScheduleCreateNestedManyWithoutLawnServicesInput } from "./ScheduleCreateNestedManyWithoutLawnServicesInput";

export type LawnServiceCreateInput = {
  description?: string | null;
  price?: number | null;
  schedules?: ScheduleCreateNestedManyWithoutLawnServicesInput;
  serviceName?: string | null;
};
