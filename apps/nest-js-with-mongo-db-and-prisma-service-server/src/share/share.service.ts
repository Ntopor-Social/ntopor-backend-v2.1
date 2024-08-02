import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShareServiceBase } from "./base/share.service.base";

@Injectable()
export class ShareService extends ShareServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
