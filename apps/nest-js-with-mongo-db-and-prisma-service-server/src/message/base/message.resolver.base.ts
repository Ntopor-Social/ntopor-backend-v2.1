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
import { Message } from "./Message";
import { MessageCountArgs } from "./MessageCountArgs";
import { MessageFindManyArgs } from "./MessageFindManyArgs";
import { MessageFindUniqueArgs } from "./MessageFindUniqueArgs";
import { CreateMessageArgs } from "./CreateMessageArgs";
import { UpdateMessageArgs } from "./UpdateMessageArgs";
import { DeleteMessageArgs } from "./DeleteMessageArgs";
import { MediaFindManyArgs } from "../../media/base/MediaFindManyArgs";
import { Media } from "../../media/base/Media";
import { User } from "../../user/base/User";
import { MessageService } from "../message.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Message)
export class MessageResolverBase {
  constructor(
    protected readonly service: MessageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async _messagesMeta(
    @graphql.Args() args: MessageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Message])
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async messages(
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    return this.service.messages(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Message, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "own",
  })
  async message(
    @graphql.Args() args: MessageFindUniqueArgs
  ): Promise<Message | null> {
    const result = await this.service.message(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Message)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "create",
    possession: "any",
  })
  async createMessage(
    @graphql.Args() args: CreateMessageArgs
  ): Promise<Message> {
    return await this.service.createMessage({
      ...args,
      data: {
        ...args.data,

        receiver: args.data.receiver
          ? {
              connect: args.data.receiver,
            }
          : undefined,

        sender: args.data.sender
          ? {
              connect: args.data.sender,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Message)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "update",
    possession: "any",
  })
  async updateMessage(
    @graphql.Args() args: UpdateMessageArgs
  ): Promise<Message | null> {
    try {
      return await this.service.updateMessage({
        ...args,
        data: {
          ...args.data,

          receiver: args.data.receiver
            ? {
                connect: args.data.receiver,
              }
            : undefined,

          sender: args.data.sender
            ? {
                connect: args.data.sender,
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

  @graphql.Mutation(() => Message)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "delete",
    possession: "any",
  })
  async deleteMessage(
    @graphql.Args() args: DeleteMessageArgs
  ): Promise<Message | null> {
    try {
      return await this.service.deleteMessage(args);
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
    @graphql.Parent() parent: Message,
    @graphql.Args() args: MediaFindManyArgs
  ): Promise<Media[]> {
    const results = await this.service.findMediaItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "receiver",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getReceiver(@graphql.Parent() parent: Message): Promise<User | null> {
    const result = await this.service.getReceiver(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "sender",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getSender(@graphql.Parent() parent: Message): Promise<User | null> {
    const result = await this.service.getSender(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
