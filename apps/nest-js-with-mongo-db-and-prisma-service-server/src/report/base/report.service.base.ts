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
  Report as PrismaReport,
  Comment as PrismaComment,
  Post as PrismaPost,
  User as PrismaUser,
} from "@prisma/client";

export class ReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReportCountArgs, "select">): Promise<number> {
    return this.prisma.report.count(args);
  }

  async reports(args: Prisma.ReportFindManyArgs): Promise<PrismaReport[]> {
    return this.prisma.report.findMany(args);
  }
  async report(
    args: Prisma.ReportFindUniqueArgs
  ): Promise<PrismaReport | null> {
    return this.prisma.report.findUnique(args);
  }
  async createReport(args: Prisma.ReportCreateArgs): Promise<PrismaReport> {
    return this.prisma.report.create(args);
  }
  async updateReport(args: Prisma.ReportUpdateArgs): Promise<PrismaReport> {
    return this.prisma.report.update(args);
  }
  async deleteReport(args: Prisma.ReportDeleteArgs): Promise<PrismaReport> {
    return this.prisma.report.delete(args);
  }

  async getComment(parentId: string): Promise<PrismaComment | null> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .comment();
  }

  async getPost(parentId: string): Promise<PrismaPost | null> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .post();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.report
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
