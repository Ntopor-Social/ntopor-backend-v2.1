import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketCanvasServiceBase } from "./base/ticketCanvas.service.base";

@Injectable()
export class TicketCanvasService extends TicketCanvasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
