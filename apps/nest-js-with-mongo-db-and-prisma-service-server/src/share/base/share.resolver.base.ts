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
import { Share } from "./Share";
import { ShareCountArgs } from "./ShareCountArgs";
import { ShareFindManyArgs } from "./ShareFindManyArgs";
import { ShareFindUniqueArgs } from "./ShareFindUniqueArgs";
import { CreateShareArgs } from "./CreateShareArgs";
import { UpdateShareArgs } from "./UpdateShareArgs";
import { DeleteShareArgs } from "./DeleteShareArgs";
import { Comment } from "../../comment/base/Comment";
import { Post } from "../../post/base/Post";
import { User } from "../../user/base/User";
import { ShareService } from "../share.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Share)
export class ShareResolverBase {
  constructor(
    protected readonly service: ShareService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Share",
    action: "read",
    possession: "any",
  })
  async _sharesMeta(
    @graphql.Args() args: ShareCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Share])
  @nestAccessControl.UseRoles({
    resource: "Share",
    action: "read",
    possession: "any",
  })
  async shares(@graphql.Args() args: ShareFindManyArgs): Promise<Share[]> {
    return this.service.shares(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Share, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Share",
    action: "read",
    possession: "own",
  })
  async share(
    @graphql.Args() args: ShareFindUniqueArgs
  ): Promise<Share | null> {
    const result = await this.service.share(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Share)
  @nestAccessControl.UseRoles({
    resource: "Share",
    action: "create",
    possession: "any",
  })
  async createShare(@graphql.Args() args: CreateShareArgs): Promise<Share> {
    return await this.service.createShare({
      ...args,
      data: {
        ...args.data,

        comment: args.data.comment
          ? {
              connect: args.data.comment,
            }
          : undefined,

        post: args.data.post
          ? {
              connect: args.data.post,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Share)
  @nestAccessControl.UseRoles({
    resource: "Share",
    action: "update",
    possession: "any",
  })
  async updateShare(
    @graphql.Args() args: UpdateShareArgs
  ): Promise<Share | null> {
    try {
      return await this.service.updateShare({
        ...args,
        data: {
          ...args.data,

          comment: args.data.comment
            ? {
                connect: args.data.comment,
              }
            : undefined,

          post: args.data.post
            ? {
                connect: args.data.post,
              }
            : undefined,

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

  @graphql.Mutation(() => Share)
  @nestAccessControl.UseRoles({
    resource: "Share",
    action: "delete",
    possession: "any",
  })
  async deleteShare(
    @graphql.Args() args: DeleteShareArgs
  ): Promise<Share | null> {
    try {
      return await this.service.deleteShare(args);
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
  @graphql.ResolveField(() => Comment, {
    nullable: true,
    name: "comment",
  })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async getComment(@graphql.Parent() parent: Share): Promise<Comment | null> {
    const result = await this.service.getComment(parent.id);

    if (!result) {
      return null;
    }
    return result;
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
  async getPost(@graphql.Parent() parent: Share): Promise<Post | null> {
    const result = await this.service.getPost(parent.id);

    if (!result) {
      return null;
    }
    return result;
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
  async getUser(@graphql.Parent() parent: Share): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
