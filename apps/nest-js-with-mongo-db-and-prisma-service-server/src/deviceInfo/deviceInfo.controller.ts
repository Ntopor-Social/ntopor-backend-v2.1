import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DeviceInfoService } from "./deviceInfo.service";
import { DeviceInfoControllerBase } from "./base/deviceInfo.controller.base";

@swagger.ApiTags("deviceInfos")
@common.Controller("deviceInfos")
export class DeviceInfoController extends DeviceInfoControllerBase {
  constructor(
    protected readonly service: DeviceInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
