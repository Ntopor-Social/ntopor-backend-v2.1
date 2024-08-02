import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PollServiceBase } from "./base/poll.service.base";

@Injectable()
export class PollService extends PollServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
