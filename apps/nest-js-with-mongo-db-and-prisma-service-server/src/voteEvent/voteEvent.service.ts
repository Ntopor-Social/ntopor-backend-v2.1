import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoteEventServiceBase } from "./base/voteEvent.service.base";

@Injectable()
export class VoteEventService extends VoteEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
