import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LawnServiceService } from "./lawnService.service";
import { LawnServiceControllerBase } from "./base/lawnService.controller.base";

@swagger.ApiTags("lawnServices")
@common.Controller("lawnServices")
export class LawnServiceController extends LawnServiceControllerBase {
  constructor(protected readonly service: LawnServiceService) {
    super(service);
  }
}
