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
  TicketCanvas as PrismaTicketCanvas,
  User as PrismaUser,
} from "@prisma/client";

export class TicketCanvasServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TicketCanvasCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ticketCanvas.count(args);
  }

  async ticketCanvasItems(
    args: Prisma.TicketCanvasFindManyArgs
  ): Promise<PrismaTicketCanvas[]> {
    return this.prisma.ticketCanvas.findMany(args);
  }
  async ticketCanvas(
    args: Prisma.TicketCanvasFindUniqueArgs
  ): Promise<PrismaTicketCanvas | null> {
    return this.prisma.ticketCanvas.findUnique(args);
  }
  async createTicketCanvas(
    args: Prisma.TicketCanvasCreateArgs
  ): Promise<PrismaTicketCanvas> {
    return this.prisma.ticketCanvas.create(args);
  }
  async updateTicketCanvas(
    args: Prisma.TicketCanvasUpdateArgs
  ): Promise<PrismaTicketCanvas> {
    return this.prisma.ticketCanvas.update(args);
  }
  async deleteTicketCanvas(
    args: Prisma.TicketCanvasDeleteArgs
  ): Promise<PrismaTicketCanvas> {
    return this.prisma.ticketCanvas.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.ticketCanvas
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
