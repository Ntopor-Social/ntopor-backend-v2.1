import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PollOptionServiceBase } from "./base/pollOption.service.base";

@Injectable()
export class PollOptionService extends PollOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
