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
import { MediaService } from "../media.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MediaCreateInput } from "./MediaCreateInput";
import { Media } from "./Media";
import { Post } from "../../post/base/Post";
import { MediaFindManyArgs } from "./MediaFindManyArgs";
import { MediaWhereUniqueInput } from "./MediaWhereUniqueInput";
import { MediaUpdateInput } from "./MediaUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MediaControllerBase {
  constructor(
    protected readonly service: MediaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Media })
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMedia(@common.Body() data: MediaCreateInput): Promise<Media> {
    return await this.service.createMedia({
      data: {
        ...data,

        comment: data.comment
          ? {
              connect: data.comment,
            }
          : undefined,

        event: data.event
          ? {
              connect: data.event,
            }
          : undefined,

        message: data.message
          ? {
              connect: data.message,
            }
          : undefined,

        post: data.post
          ? {
              connect: data.post,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        voteEvent: data.voteEvent
          ? {
              connect: data.voteEvent,
            }
          : undefined,

        voteEventCandidate: data.voteEventCandidate
          ? {
              connect: data.voteEventCandidate,
            }
          : undefined,

        voteEventCandidateMedia: data.voteEventCandidateMedia
          ? {
              connect: data.voteEventCandidateMedia,
            }
          : undefined,
      },
      select: {
        comment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateCreated: true,
        duration: true,

        event: {
          select: {
            id: true,
          },
        },

        height: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        meta: true,
        metaType: true,

        post: {
          select: {
            id: true,
          },
        },

        thumbnail: true,
        typeField: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },

        voteEvent: {
          select: {
            id: true,
          },
        },

        voteEventCandidate: {
          select: {
            id: true,
          },
        },

        voteEventCandidateMedia: {
          select: {
            id: true,
          },
        },

        width: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Media] })
  @ApiNestedQuery(MediaFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mediaItems(@common.Req() request: Request): Promise<Media[]> {
    const args = plainToClass(MediaFindManyArgs, request.query);
    return this.service.mediaItems({
      ...args,
      select: {
        comment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateCreated: true,
        duration: true,

        event: {
          select: {
            id: true,
          },
        },

        height: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        meta: true,
        metaType: true,

        post: {
          select: {
            id: true,
          },
        },

        thumbnail: true,
        typeField: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },

        voteEvent: {
          select: {
            id: true,
          },
        },

        voteEventCandidate: {
          select: {
            id: true,
          },
        },

        voteEventCandidateMedia: {
          select: {
            id: true,
          },
        },

        width: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Media })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async media(
    @common.Param() params: MediaWhereUniqueInput
  ): Promise<Media | null> {
    const result = await this.service.media({
      where: params,
      select: {
        comment: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateCreated: true,
        duration: true,

        event: {
          select: {
            id: true,
          },
        },

        height: true,
        id: true,

        message: {
          select: {
            id: true,
          },
        },

        meta: true,
        metaType: true,

        post: {
          select: {
            id: true,
          },
        },

        thumbnail: true,
        typeField: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },

        voteEvent: {
          select: {
            id: true,
          },
        },

        voteEventCandidate: {
          select: {
            id: true,
          },
        },

        voteEventCandidateMedia: {
          select: {
            id: true,
          },
        },

        width: true,
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
  @swagger.ApiOkResponse({ type: Media })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMedia(
    @common.Param() params: MediaWhereUniqueInput,
    @common.Body() data: MediaUpdateInput
  ): Promise<Media | null> {
    try {
      return await this.service.updateMedia({
        where: params,
        data: {
          ...data,

          comment: data.comment
            ? {
                connect: data.comment,
              }
            : undefined,

          event: data.event
            ? {
                connect: data.event,
              }
            : undefined,

          message: data.message
            ? {
                connect: data.message,
              }
            : undefined,

          post: data.post
            ? {
                connect: data.post,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          voteEvent: data.voteEvent
            ? {
                connect: data.voteEvent,
              }
            : undefined,

          voteEventCandidate: data.voteEventCandidate
            ? {
                connect: data.voteEventCandidate,
              }
            : undefined,

          voteEventCandidateMedia: data.voteEventCandidateMedia
            ? {
                connect: data.voteEventCandidateMedia,
              }
            : undefined,
        },
        select: {
          comment: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          dateCreated: true,
          duration: true,

          event: {
            select: {
              id: true,
            },
          },

          height: true,
          id: true,

          message: {
            select: {
              id: true,
            },
          },

          meta: true,
          metaType: true,

          post: {
            select: {
              id: true,
            },
          },

          thumbnail: true,
          typeField: true,
          updatedAt: true,
          url: true,

          user: {
            select: {
              id: true,
            },
          },

          voteEvent: {
            select: {
              id: true,
            },
          },

          voteEventCandidate: {
            select: {
              id: true,
            },
          },

          voteEventCandidateMedia: {
            select: {
              id: true,
            },
          },

          width: true,
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
  @swagger.ApiOkResponse({ type: Media })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMedia(
    @common.Param() params: MediaWhereUniqueInput
  ): Promise<Media | null> {
    try {
      return await this.service.deleteMedia({
        where: params,
        select: {
          comment: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          dateCreated: true,
          duration: true,

          event: {
            select: {
              id: true,
            },
          },

          height: true,
          id: true,

          message: {
            select: {
              id: true,
            },
          },

          meta: true,
          metaType: true,

          post: {
            select: {
              id: true,
            },
          },

          thumbnail: true,
          typeField: true,
          updatedAt: true,
          url: true,

          user: {
            select: {
              id: true,
            },
          },

          voteEvent: {
            select: {
              id: true,
            },
          },

          voteEventCandidate: {
            select: {
              id: true,
            },
          },

          voteEventCandidateMedia: {
            select: {
              id: true,
            },
          },

          width: true,
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
}
