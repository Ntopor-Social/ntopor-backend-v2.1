import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PollingServiceBase } from "./base/polling.service.base";

@Injectable()
export class PollingService extends PollingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
