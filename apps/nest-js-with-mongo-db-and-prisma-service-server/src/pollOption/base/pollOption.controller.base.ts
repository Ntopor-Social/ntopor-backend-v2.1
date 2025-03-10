/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PollOptionService } from "../pollOption.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PollOptionCreateInput } from "./PollOptionCreateInput";
import { PollOption } from "./PollOption";
import { Post } from "../../post/base/Post";
import { PollOptionFindManyArgs } from "./PollOptionFindManyArgs";
import { PollOptionWhereUniqueInput } from "./PollOptionWhereUniqueInput";
import { PollOptionUpdateInput } from "./PollOptionUpdateInput";
import { PollFindManyArgs } from "../../poll/base/PollFindManyArgs";
import { Poll } from "../../poll/base/Poll";
import { PollWhereUniqueInput } from "../../poll/base/PollWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PollOptionControllerBase {
  constructor(
    protected readonly service: PollOptionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PollOption })
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPollOption(
    @common.Body() data: PollOptionCreateInput
  ): Promise<PollOption> {
    return await this.service.createPollOption({
      data: {
        ...data,

        polling: data.polling
          ? {
              connect: data.polling,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateCreated: true,
        id: true,

        polling: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PollOption] })
  @ApiNestedQuery(PollOptionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pollOptions(@common.Req() request: Request): Promise<PollOption[]> {
    const args = plainToClass(PollOptionFindManyArgs, request.query);
    return this.service.pollOptions({
      ...args,
      select: {
        createdAt: true,
        dateCreated: true,
        id: true,

        polling: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PollOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pollOption(
    @common.Param() params: PollOptionWhereUniqueInput
  ): Promise<PollOption | null> {
    const result = await this.service.pollOption({
      where: params,
      select: {
        createdAt: true,
        dateCreated: true,
        id: true,

        polling: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PollOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePollOption(
    @common.Param() params: PollOptionWhereUniqueInput,
    @common.Body() data: PollOptionUpdateInput
  ): Promise<PollOption | null> {
    try {
      return await this.service.updatePollOption({
        where: params,
        data: {
          ...data,

          polling: data.polling
            ? {
                connect: data.polling,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateCreated: true,
          id: true,

          polling: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PollOption })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePollOption(
    @common.Param() params: PollOptionWhereUniqueInput
  ): Promise<PollOption | null> {
    try {
      return await this.service.deletePollOption({
        where: params,
        select: {
          createdAt: true,
          dateCreated: true,
          id: true,

          polling: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/polls")
  @ApiNestedQuery(PollFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Poll",
    action: "read",
    possession: "any",
  })
  async findPolls(
    @common.Req() request: Request,
    @common.Param() params: PollOptionWhereUniqueInput
  ): Promise<Poll[]> {
    const query = plainToClass(PollFindManyArgs, request.query);
    const results = await this.service.findPolls(params.id, {
      ...query,
      select: {
        createdAt: true,
        currency: true,
        dateCreated: true,
        id: true,
        packageDescription: true,
        packageName: true,
        packageSize: true,

        pollOption: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        voter: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/polls")
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "update",
    possession: "any",
  })
  async connectPolls(
    @common.Param() params: PollOptionWhereUniqueInput,
    @common.Body() body: PollWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      polls: {
        connect: body,
      },
    };
    await this.service.updatePollOption({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/polls")
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "update",
    possession: "any",
  })
  async updatePolls(
    @common.Param() params: PollOptionWhereUniqueInput,
    @common.Body() body: PollWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      polls: {
        set: body,
      },
    };
    await this.service.updatePollOption({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/polls")
  @nestAccessControl.UseRoles({
    resource: "PollOption",
    action: "update",
    possession: "any",
  })
  async disconnectPolls(
    @common.Param() params: PollOptionWhereUniqueInput,
    @common.Body() body: PollWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      polls: {
        disconnect: body,
      },
    };
    await this.service.updatePollOption({
      where: params,
      data,
      select: { id: true },
    });
  }
}
