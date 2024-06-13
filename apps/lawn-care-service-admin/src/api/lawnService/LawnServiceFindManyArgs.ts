import { LawnServiceWhereInput } from "./LawnServiceWhereInput";
import { LawnServiceOrderByInput } from "./LawnServiceOrderByInput";

export type LawnServiceFindManyArgs = {
  where?: LawnServiceWhereInput;
  orderBy?: Array<LawnServiceOrderByInput>;
  skip?: number;
  take?: number;
};
