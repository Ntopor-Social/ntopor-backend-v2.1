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
  Post as PrismaPost,
  Comment as PrismaComment,
  Like as PrismaLike,
  Media as PrismaMedia,
  Polling as PrismaPolling,
  Report as PrismaReport,
  Share as PrismaShare,
  Location as PrismaLocation,
  User as PrismaUser,
} from "@prisma/client";

export class PostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PostCountArgs, "select">): Promise<number> {
    return this.prisma.post.count(args);
  }

  async posts(args: Prisma.PostFindManyArgs): Promise<PrismaPost[]> {
    return this.prisma.post.findMany(args);
  }
  async post(args: Prisma.PostFindUniqueArgs): Promise<PrismaPost | null> {
    return this.prisma.post.findUnique(args);
  }
  async createPost(args: Prisma.PostCreateArgs): Promise<PrismaPost> {
    return this.prisma.post.create(args);
  }
  async updatePost(args: Prisma.PostUpdateArgs): Promise<PrismaPost> {
    return this.prisma.post.update(args);
  }
  async deletePost(args: Prisma.PostDeleteArgs): Promise<PrismaPost> {
    return this.prisma.post.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.post
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }

  async findLikes(
    parentId: string,
    args: Prisma.LikeFindManyArgs
  ): Promise<PrismaLike[]> {
    return this.prisma.post
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .likes(args);
  }

  async findMediaItems(
    parentId: string,
    args: Prisma.MediaFindManyArgs
  ): Promise<PrismaMedia[]> {
    return this.prisma.post
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mediaItems(args);
  }

  async findPollings(
    parentId: string,
    args: Prisma.PollingFindManyArgs
  ): Promise<PrismaPolling[]> {
    return this.prisma.post
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .pollings(args);
  }

  async findReports(
    parentId: string,
    args: Prisma.ReportFindManyArgs
  ): Promise<PrismaReport[]> {
    return this.prisma.post
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reports(args);
  }

  async findShares(
    parentId: string,
    args: Prisma.ShareFindManyArgs
  ): Promise<PrismaShare[]> {
    return this.prisma.post
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .shares(args);
  }

  async getLocation(parentId: string): Promise<PrismaLocation | null> {
    return this.prisma.post
      .findUnique({
        where: { id: parentId },
      })
      .location();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.post
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
