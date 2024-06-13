import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LawnServiceWhereUniqueInput } from "../lawnService/LawnServiceWhereUniqueInput";

export type ScheduleWhereInput = {
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  lawnService?: LawnServiceWhereUniqueInput;
  status?: "Option1";
};
