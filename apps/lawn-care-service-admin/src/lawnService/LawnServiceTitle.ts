import { LawnService as TLawnService } from "../api/lawnService/LawnService";

export const LAWNSERVICE_TITLE_FIELD = "serviceName";

export const LawnServiceTitle = (record: TLawnService): string => {
  return record.serviceName?.toString() || String(record.id);
};
