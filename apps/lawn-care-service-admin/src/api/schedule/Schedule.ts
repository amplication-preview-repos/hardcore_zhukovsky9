import { Client } from "../client/Client";
import { LawnService } from "../lawnService/LawnService";

export type Schedule = {
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  lawnService?: LawnService | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
