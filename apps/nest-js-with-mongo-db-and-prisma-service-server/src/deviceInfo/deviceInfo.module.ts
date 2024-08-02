import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DeviceInfoModuleBase } from "./base/deviceInfo.module.base";
import { DeviceInfoService } from "./deviceInfo.service";
import { DeviceInfoController } from "./deviceInfo.controller";
import { DeviceInfoResolver } from "./deviceInfo.resolver";

@Module({
  imports: [DeviceInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [DeviceInfoController],
  providers: [DeviceInfoService, DeviceInfoResolver],
  exports: [DeviceInfoService],
})
export class DeviceInfoModule {}
