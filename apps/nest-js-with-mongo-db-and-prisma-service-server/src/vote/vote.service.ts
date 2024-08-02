import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoteServiceBase } from "./base/vote.service.base";

@Injectable()
export class VoteService extends VoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
