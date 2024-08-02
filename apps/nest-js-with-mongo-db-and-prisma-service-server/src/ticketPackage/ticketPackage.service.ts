import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketPackageServiceBase } from "./base/ticketPackage.service.base";

@Injectable()
export class TicketPackageService extends TicketPackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
