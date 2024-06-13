import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LawnServiceServiceBase } from "./base/lawnService.service.base";

@Injectable()
export class LawnServiceService extends LawnServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
