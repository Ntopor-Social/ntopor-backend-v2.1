import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WithdrawServiceBase } from "./base/withdraw.service.base";

@Injectable()
export class WithdrawService extends WithdrawServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
