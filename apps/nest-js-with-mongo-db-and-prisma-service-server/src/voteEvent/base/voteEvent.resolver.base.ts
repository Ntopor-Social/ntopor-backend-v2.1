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
import { VoteEvent } from "./VoteEvent";
import { VoteEventCountArgs } from "./VoteEventCountArgs";
import { VoteEventFindManyArgs } from "./VoteEventFindManyArgs";
import { VoteEventFindUniqueArgs } from "./VoteEventFindUniqueArgs";
import { CreateVoteEventArgs } from "./CreateVoteEventArgs";
import { UpdateVoteEventArgs } from "./UpdateVoteEventArgs";
import { DeleteVoteEventArgs } from "./DeleteVoteEventArgs";
import { MediaFindManyArgs } from "../../media/base/MediaFindManyArgs";
import { Media } from "../../media/base/Media";
import { VoteEventCandidateFindManyArgs } from "../../voteEventCandidate/base/VoteEventCandidateFindManyArgs";
import { VoteEventCandidate } from "../../voteEventCandidate/base/VoteEventCandidate";
import { User } from "../../user/base/User";
import { VoteEventService } from "../voteEvent.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoteEvent)
export class VoteEventResolverBase {
  constructor(
    protected readonly service: VoteEventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "VoteEvent",
    action: "read",
    possession: "any",
  })
  async _voteEventsMeta(
    @graphql.Args() args: VoteEventCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [VoteEvent])
  @nestAccessControl.UseRoles({
    resource: "VoteEvent",
    action: "read",
    possession: "any",
  })
  async voteEvents(
    @graphql.Args() args: VoteEventFindManyArgs
  ): Promise<VoteEvent[]> {
    return this.service.voteEvents(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => VoteEvent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "VoteEvent",
    action: "read",
    possession: "own",
  })
  async voteEvent(
    @graphql.Args() args: VoteEventFindUniqueArgs
  ): Promise<VoteEvent | null> {
    const result = await this.service.voteEvent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => VoteEvent)
  @nestAccessControl.UseRoles({
    resource: "VoteEvent",
    action: "create",
    possession: "any",
  })
  async createVoteEvent(
    @graphql.Args() args: CreateVoteEventArgs
  ): Promise<VoteEvent> {
    return await this.service.createVoteEvent({
      ...args,
      data: {
        ...args.data,

        organizer: args.data.organizer
          ? {
              connect: args.data.organizer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => VoteEvent)
  @nestAccessControl.UseRoles({
    resource: "VoteEvent",
    action: "update",
    possession: "any",
  })
  async updateVoteEvent(
    @graphql.Args() args: UpdateVoteEventArgs
  ): Promise<VoteEvent | null> {
    try {
      return await this.service.updateVoteEvent({
        ...args,
        data: {
          ...args.data,

          organizer: args.data.organizer
            ? {
                connect: args.data.organizer,
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

  @graphql.Mutation(() => VoteEvent)
  @nestAccessControl.UseRoles({
    resource: "VoteEvent",
    action: "delete",
    possession: "any",
  })
  async deleteVoteEvent(
    @graphql.Args() args: DeleteVoteEventArgs
  ): Promise<VoteEvent | null> {
    try {
      return await this.service.deleteVoteEvent(args);
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
  @graphql.ResolveField(() => [Media], { name: "mediaItems" })
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "read",
    possession: "any",
  })
  async findMediaItems(
    @graphql.Parent() parent: VoteEvent,
    @graphql.Args() args: MediaFindManyArgs
  ): Promise<Media[]> {
    const results = await this.service.findMediaItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [VoteEventCandidate], {
    name: "voteEventCandidates",
  })
  @nestAccessControl.UseRoles({
    resource: "VoteEventCandidate",
    action: "read",
    possession: "any",
  })
  async findVoteEventCandidates(
    @graphql.Parent() parent: VoteEvent,
    @graphql.Args() args: VoteEventCandidateFindManyArgs
  ): Promise<VoteEventCandidate[]> {
    const results = await this.service.findVoteEventCandidates(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "organizer",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getOrganizer(
    @graphql.Parent() parent: VoteEvent
  ): Promise<User | null> {
    const result = await this.service.getOrganizer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
