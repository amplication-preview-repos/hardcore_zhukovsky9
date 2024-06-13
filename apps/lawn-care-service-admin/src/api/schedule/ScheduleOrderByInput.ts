import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  lawnServiceId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
