import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LawnServiceWhereUniqueInput } from "../lawnService/LawnServiceWhereUniqueInput";

export type ScheduleUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  lawnService?: LawnServiceWhereUniqueInput | null;
  status?: "Option1" | null;
};
