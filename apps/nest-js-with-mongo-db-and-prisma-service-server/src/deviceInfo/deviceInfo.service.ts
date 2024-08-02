import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeviceInfoServiceBase } from "./base/deviceInfo.service.base";

@Injectable()
export class DeviceInfoService extends DeviceInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
