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
import { Report } from "./Report";
import { ReportCountArgs } from "./ReportCountArgs";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportFindUniqueArgs } from "./ReportFindUniqueArgs";
import { CreateReportArgs } from "./CreateReportArgs";
import { UpdateReportArgs } from "./UpdateReportArgs";
import { DeleteReportArgs } from "./DeleteReportArgs";
import { Comment } from "../../comment/base/Comment";
import { Post } from "../../post/base/Post";
import { User } from "../../user/base/User";
import { ReportService } from "../report.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Report)
export class ReportResolverBase {
  constructor(
    protected readonly service: ReportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async _reportsMeta(
    @graphql.Args() args: ReportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Report])
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  async reports(@graphql.Args() args: ReportFindManyArgs): Promise<Report[]> {
    return this.service.reports(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Report, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "own",
  })
  async report(
    @graphql.Args() args: ReportFindUniqueArgs
  ): Promise<Report | null> {
    const result = await this.service.report(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Report)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "create",
    possession: "any",
  })
  async createReport(@graphql.Args() args: CreateReportArgs): Promise<Report> {
    return await this.service.createReport({
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
  @graphql.Mutation(() => Report)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  async updateReport(
    @graphql.Args() args: UpdateReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.updateReport({
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

  @graphql.Mutation(() => Report)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "delete",
    possession: "any",
  })
  async deleteReport(
    @graphql.Args() args: DeleteReportArgs
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport(args);
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
  async getComment(@graphql.Parent() parent: Report): Promise<Comment | null> {
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
  async getPost(@graphql.Parent() parent: Report): Promise<Post | null> {
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
  async getUser(@graphql.Parent() parent: Report): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
