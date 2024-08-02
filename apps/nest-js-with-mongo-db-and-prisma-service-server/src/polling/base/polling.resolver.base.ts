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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Polling } from "./Polling";
import { PollingCountArgs } from "./PollingCountArgs";
import { PollingFindManyArgs } from "./PollingFindManyArgs";
import { PollingFindUniqueArgs } from "./PollingFindUniqueArgs";
import { CreatePollingArgs } from "./CreatePollingArgs";
import { UpdatePollingArgs } from "./UpdatePollingArgs";
import { DeletePollingArgs } from "./DeletePollingArgs";
import { PollOptionFindManyArgs } from "../../pollOption/base/PollOptionFindManyArgs";
import { PollOption } from "../../pollOption/base/PollOption";
import { Post } from "../../post/base/Post";
import { PollingService } from "../polling.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Polling)
export class PollingResolverBase {
  constructor(
    protected readonly service: PollingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Polling",
    action: "read",
    possession: "any",
  })
  async _pollingsMeta(
    @graphql.Args() args: PollingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Polling])
  @nestAccessControl.UseRoles({
    resource: "Polling",
    action: "read",
    possession: "any",
  })
  async pollings(
    @graphql.Args() args: PollingFindManyArgs
  ): Promise<Polling[]> {
    return this.service.pollings(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Polling, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Polling",
    action: "read",
    possession: "own",
  })
  async polling(
    @graphql.Args() args: PollingFindUniqueArgs
  ): Promise<Polling | null> {
    const result = await this.service.polling(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Polling)
  @nestAccessControl.UseRoles({
    resource: "Polling",
    action: "create",
    possession: "any",
  })
  async createPolling(
    @graphql.Args() args: CreatePollingArgs
  ): Promise<Polling> {
    return await this.service.createPolling({
      ...args,
      data: {
        ...args.data,

        post: args.data.post
          ? {
              connect: args.data.post,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Polling)
  @nestAccessControl.UseRoles({
    resource: "Polling",
    action: "update",
    possession: "any",
  })
  async updatePolling(
    @graphql.Args() args: UpdatePollingArgs
  ): Promise<Polling | null> {
    try {
      return await this.service.updatePolling({
        ...args,
        data: {
          ...args.data,

          post: args.data.post
            ? {
                connect: args.data.post,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Polling)
  @nestAccessControl.UseRoles({
    resource: "Polling",
    action: "delete",
    possession: "any",
  })
  async deletePolling(
    @graphql.Args() args: DeletePollingArgs
  ): Promise<Polling | null> {
    try {
      return await this.service.deletePolling(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PollOption], { name: "pollOptions" })
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "read",
    possession: "any",
  })
  async findPollOptions(
    @graphql.Parent() parent: Polling,
    @graphql.Args() args: PollOptionFindManyArgs
  ): Promise<PollOption[]> {
    const results = await this.service.findPollOptions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Post, {
    nullable: true,
    name: "post",
  })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "any",
  })
  async getPost(@graphql.Parent() parent: Polling): Promise<Post | null> {
    const result = await this.service.getPost(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
