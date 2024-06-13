import { ScheduleUpdateManyWithoutLawnServicesInput } from "./ScheduleUpdateManyWithoutLawnServicesInput";

export type LawnServiceUpdateInput = {
  description?: string | null;
  price?: number | null;
  schedules?: ScheduleUpdateManyWithoutLawnServicesInput;
  serviceName?: string | null;
};
