import { Module } from "@nestjs/common";
import { LawnServiceModuleBase } from "./base/lawnService.module.base";
import { LawnServiceService } from "./lawnService.service";
import { LawnServiceController } from "./lawnService.controller";
import { LawnServiceResolver } from "./lawnService.resolver";

@Module({
  imports: [LawnServiceModuleBase],
  controllers: [LawnServiceController],
  providers: [LawnServiceService, LawnServiceResolver],
  exports: [LawnServiceService],
})
export class LawnServiceModule {}
