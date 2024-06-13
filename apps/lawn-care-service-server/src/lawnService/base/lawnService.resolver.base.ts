/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { LawnService } from "./LawnService";
import { LawnServiceCountArgs } from "./LawnServiceCountArgs";
import { LawnServiceFindManyArgs } from "./LawnServiceFindManyArgs";
import { LawnServiceFindUniqueArgs } from "./LawnServiceFindUniqueArgs";
import { CreateLawnServiceArgs } from "./CreateLawnServiceArgs";
import { UpdateLawnServiceArgs } from "./UpdateLawnServiceArgs";
import { DeleteLawnServiceArgs } from "./DeleteLawnServiceArgs";
import { ScheduleFindManyArgs } from "../../schedule/base/ScheduleFindManyArgs";
import { Schedule } from "../../schedule/base/Schedule";
import { LawnServiceService } from "../lawnService.service";
@graphql.Resolver(() => LawnService)
export class LawnServiceResolverBase {
  constructor(protected readonly service: LawnServiceService) {}

  async _lawnServicesMeta(
    @graphql.Args() args: LawnServiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [LawnService])
  async lawnServices(
    @graphql.Args() args: LawnServiceFindManyArgs
  ): Promise<LawnService[]> {
    return this.service.lawnServices(args);
  }

  @graphql.Query(() => LawnService, { nullable: true })
  async lawnService(
    @graphql.Args() args: LawnServiceFindUniqueArgs
  ): Promise<LawnService | null> {
    const result = await this.service.lawnService(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => LawnService)
  async createLawnService(
    @graphql.Args() args: CreateLawnServiceArgs
  ): Promise<LawnService> {
    return await this.service.createLawnService({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => LawnService)
  async updateLawnService(
    @graphql.Args() args: UpdateLawnServiceArgs
  ): Promise<LawnService | null> {
    try {
      return await this.service.updateLawnService({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => LawnService)
  async deleteLawnService(
    @graphql.Args() args: DeleteLawnServiceArgs
  ): Promise<LawnService | null> {
    try {
      return await this.service.deleteLawnService(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Schedule], { name: "schedules" })
  async findSchedules(
    @graphql.Parent() parent: LawnService,
    @graphql.Args() args: ScheduleFindManyArgs
  ): Promise<Schedule[]> {
    const results = await this.service.findSchedules(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
