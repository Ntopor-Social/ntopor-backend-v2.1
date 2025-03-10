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
import { Location } from "./Location";
import { LocationCountArgs } from "./LocationCountArgs";
import { LocationFindManyArgs } from "./LocationFindManyArgs";
import { LocationFindUniqueArgs } from "./LocationFindUniqueArgs";
import { CreateLocationArgs } from "./CreateLocationArgs";
import { UpdateLocationArgs } from "./UpdateLocationArgs";
import { DeleteLocationArgs } from "./DeleteLocationArgs";
import { PostFindManyArgs } from "../../post/base/PostFindManyArgs";
import { Post } from "../../post/base/Post";
import { User } from "../../user/base/User";
import { LocationService } from "../location.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Location)
export class LocationResolverBase {
  constructor(
    protected readonly service: LocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async _locationsMeta(
    @graphql.Args() args: LocationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Location])
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async locations(
    @graphql.Args() args: LocationFindManyArgs
  ): Promise<Location[]> {
    return this.service.locations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Location, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "own",
  })
  async location(
    @graphql.Args() args: LocationFindUniqueArgs
  ): Promise<Location | null> {
    const result = await this.service.location(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Location)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "create",
    possession: "any",
  })
  async createLocation(
    @graphql.Args() args: CreateLocationArgs
  ): Promise<Location> {
    return await this.service.createLocation({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Location)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async updateLocation(
    @graphql.Args() args: UpdateLocationArgs
  ): Promise<Location | null> {
    try {
      return await this.service.updateLocation({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => Location)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "delete",
    possession: "any",
  })
  async deleteLocation(
    @graphql.Args() args: DeleteLocationArgs
  ): Promise<Location | null> {
    try {
      return await this.service.deleteLocation(args);
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
  @graphql.ResolveField(() => [Post], { name: "posts" })
  @nestAccessControl.UseRoles({
    resource: "Post",
    action: "read",
    possession: "any",
  })
  async findPosts(
    @graphql.Parent() parent: Location,
    @graphql.Args() args: PostFindManyArgs
  ): Promise<Post[]> {
    const results = await this.service.findPosts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Location): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
