/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Media as PrismaMedia,
  Comment as PrismaComment,
  Event as PrismaEvent,
  Message as PrismaMessage,
  Post as PrismaPost,
  User as PrismaUser,
  VoteEvent as PrismaVoteEvent,
  VoteEventCandidate as PrismaVoteEventCandidate,
} from "@prisma/client";

export class MediaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MediaCountArgs, "select">): Promise<number> {
    return this.prisma.media.count(args);
  }

  async mediaItems(args: Prisma.MediaFindManyArgs): Promise<PrismaMedia[]> {
    return this.prisma.media.findMany(args);
  }
  async media(args: Prisma.MediaFindUniqueArgs): Promise<PrismaMedia | null> {
    return this.prisma.media.findUnique(args);
  }
  async createMedia(args: Prisma.MediaCreateArgs): Promise<PrismaMedia> {
    return this.prisma.media.create(args);
  }
  async updateMedia(args: Prisma.MediaUpdateArgs): Promise<PrismaMedia> {
    return this.prisma.media.update(args);
  }
  async deleteMedia(args: Prisma.MediaDeleteArgs): Promise<PrismaMedia> {
    return this.prisma.media.delete(args);
  }

  async getComment(parentId: string): Promise<PrismaComment | null> {
    return this.prisma.media
      .findUnique({
        where: { id: parentId },
      })
      .comment();
  }

  async getEvent(parentId: string): Promise<PrismaEvent | null> {
    return this.prisma.media
      .findUnique({
        where: { id: parentId },
      })
      .event();
  }

  async getMessage(parentId: string): Promise<PrismaMessage | null> {
    return this.prisma.media
      .findUnique({
        where: { id: parentId },
      })
      .message();
  }

  async getPost(parentId: string): Promise<PrismaPost | null> {
    return this.prisma.media
      .findUnique({
        where: { id: parentId },
      })
      .post();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.media
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getVoteEvent(parentId: string): Promise<PrismaVoteEvent | null> {
    return this.prisma.media
      .findUnique({
        where: { id: parentId },
      })
      .voteEvent();
  }

  async getVoteEventCandidate(
    parentId: string
  ): Promise<PrismaVoteEventCandidate | null> {
    return this.prisma.media
      .findUnique({
        where: { id: parentId },
      })
      .voteEventCandidate();
  }

  async getVoteEventCandidateMedia(
    parentId: string
  ): Promise<PrismaVoteEventCandidate | null> {
    return this.prisma.media
      .findUnique({
        where: { id: parentId },
      })
      .voteEventCandidateMedia();
  }
}
