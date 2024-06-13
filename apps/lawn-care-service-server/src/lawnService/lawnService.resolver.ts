import * as graphql from "@nestjs/graphql";
import { LawnServiceResolverBase } from "./base/lawnService.resolver.base";
import { LawnService } from "./base/LawnService";
import { LawnServiceService } from "./lawnService.service";

@graphql.Resolver(() => LawnService)
export class LawnServiceResolver extends LawnServiceResolverBase {
  constructor(protected readonly service: LawnServiceService) {
    super(service);
  }
}
