import { SortOrder } from "../../util/SortOrder";

export type LawnServiceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  serviceName?: SortOrder;
  updatedAt?: SortOrder;
};
