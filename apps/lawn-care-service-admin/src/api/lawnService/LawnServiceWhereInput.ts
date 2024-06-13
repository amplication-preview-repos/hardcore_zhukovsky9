import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";

export type LawnServiceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  schedules?: ScheduleListRelationFilter;
  serviceName?: StringNullableFilter;
};
