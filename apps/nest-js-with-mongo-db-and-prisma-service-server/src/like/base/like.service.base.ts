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
  Like as PrismaLike,
  Comment as PrismaComment,
  Post as PrismaPost,
  User as PrismaUser,
} from "@prisma/client";

export class LikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LikeCountArgs, "select">): Promise<number> {
    return this.prisma.like.count(args);
  }

  async likes(args: Prisma.LikeFindManyArgs): Promise<PrismaLike[]> {
    return this.prisma.like.findMany(args);
  }
  async like(args: Prisma.LikeFindUniqueArgs): Promise<PrismaLike | null> {
    return this.prisma.like.findUnique(args);
  }
  async createLike(args: Prisma.LikeCreateArgs): Promise<PrismaLike> {
    return this.prisma.like.create(args);
  }
  async updateLike(args: Prisma.LikeUpdateArgs): Promise<PrismaLike> {
    return this.prisma.like.update(args);
  }
  async deleteLike(args: Prisma.LikeDeleteArgs): Promise<PrismaLike> {
    return this.prisma.like.delete(args);
  }

  async getComment(parentId: string): Promise<PrismaComment | null> {
    return this.prisma.like
      .findUnique({
        where: { id: parentId },
      })
      .comment();
  }

  async getPost(parentId: string): Promise<PrismaPost | null> {
    return this.prisma.like
      .findUnique({
        where: { id: parentId },
      })
      .post();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.like
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
