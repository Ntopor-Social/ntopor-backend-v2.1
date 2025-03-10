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
import { TicketPackageService } from "../ticketPackage.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TicketPackageCreateInput } from "./TicketPackageCreateInput";
import { TicketPackage } from "./TicketPackage";
import { Post } from "../../post/base/Post";
import { TicketPackageFindManyArgs } from "./TicketPackageFindManyArgs";
import { TicketPackageWhereUniqueInput } from "./TicketPackageWhereUniqueInput";
import { TicketPackageUpdateInput } from "./TicketPackageUpdateInput";
import { TicketFindManyArgs } from "../../ticket/base/TicketFindManyArgs";
import { Ticket } from "../../ticket/base/Ticket";
import { TicketWhereUniqueInput } from "../../ticket/base/TicketWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TicketPackageControllerBase {
  constructor(
    protected readonly service: TicketPackageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TicketPackage })
  @nestAccessControl.UseRoles({
    resource: "TicketPackage",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTicketPackage(
    @common.Body() data: TicketPackageCreateInput
  ): Promise<TicketPackage> {
    return await this.service.createTicketPackage({
      data: {
        ...data,

        event: data.event
          ? {
              connect: data.event,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        currency: true,
        dateCreated: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        packageDescription: true,
        packageName: true,
        packageSize: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TicketPackage] })
  @ApiNestedQuery(TicketPackageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TicketPackage",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ticketPackages(
    @common.Req() request: Request
  ): Promise<TicketPackage[]> {
    const args = plainToClass(TicketPackageFindManyArgs, request.query);
    return this.service.ticketPackages({
      ...args,
      select: {
        createdAt: true,
        currency: true,
        dateCreated: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        packageDescription: true,
        packageName: true,
        packageSize: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TicketPackage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TicketPackage",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ticketPackage(
    @common.Param() params: TicketPackageWhereUniqueInput
  ): Promise<TicketPackage | null> {
    const result = await this.service.ticketPackage({
      where: params,
      select: {
        createdAt: true,
        currency: true,
        dateCreated: true,

        event: {
          select: {
            id: true,
          },
        },

        id: true,
        packageDescription: true,
        packageName: true,
        packageSize: true,
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
  @swagger.ApiOkResponse({ type: TicketPackage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TicketPackage",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTicketPackage(
    @common.Param() params: TicketPackageWhereUniqueInput,
    @common.Body() data: TicketPackageUpdateInput
  ): Promise<TicketPackage | null> {
    try {
      return await this.service.updateTicketPackage({
        where: params,
        data: {
          ...data,

          event: data.event
            ? {
                connect: data.event,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          currency: true,
          dateCreated: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,
          packageDescription: true,
          packageName: true,
          packageSize: true,
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
  @swagger.ApiOkResponse({ type: TicketPackage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TicketPackage",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTicketPackage(
    @common.Param() params: TicketPackageWhereUniqueInput
  ): Promise<TicketPackage | null> {
    try {
      return await this.service.deleteTicketPackage({
        where: params,
        select: {
          createdAt: true,
          currency: true,
          dateCreated: true,

          event: {
            select: {
              id: true,
            },
          },

          id: true,
          packageDescription: true,
          packageName: true,
          packageSize: true,
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
  @common.Get("/:id/tickets")
  @ApiNestedQuery(TicketFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "read",
    possession: "any",
  })
  async findTickets(
    @common.Req() request: Request,
    @common.Param() params: TicketPackageWhereUniqueInput
  ): Promise<Ticket[]> {
    const query = plainToClass(TicketFindManyArgs, request.query);
    const results = await this.service.findTickets(params.id, {
      ...query,
      select: {
        boughtBy: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateCreated: true,

        event: {
          select: {
            id: true,
          },
        },

        eventDateTime: true,
        id: true,
        isTicketActive: true,
        ticketOwnersMeta: true,

        ticketType: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tickets")
  @nestAccessControl.UseRoles({
    resource: "TicketPackage",
    action: "update",
    possession: "any",
  })
  async connectTickets(
    @common.Param() params: TicketPackageWhereUniqueInput,
    @common.Body() body: TicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tickets: {
        connect: body,
      },
    };
    await this.service.updateTicketPackage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tickets")
  @nestAccessControl.UseRoles({
    resource: "TicketPackage",
    action: "update",
    possession: "any",
  })
  async updateTickets(
    @common.Param() params: TicketPackageWhereUniqueInput,
    @common.Body() body: TicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tickets: {
        set: body,
      },
    };
    await this.service.updateTicketPackage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tickets")
  @nestAccessControl.UseRoles({
    resource: "TicketPackage",
    action: "update",
    possession: "any",
  })
  async disconnectTickets(
    @common.Param() params: TicketPackageWhereUniqueInput,
    @common.Body() body: TicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tickets: {
        disconnect: body,
      },
    };
    await this.service.updateTicketPackage({
      where: params,
      data,
      select: { id: true },
    });
  }
}
