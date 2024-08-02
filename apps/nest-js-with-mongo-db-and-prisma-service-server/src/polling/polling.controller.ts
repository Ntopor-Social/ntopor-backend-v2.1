import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PollingService } from "./polling.service";
import { PollingControllerBase } from "./base/polling.controller.base";

@swagger.ApiTags("pollings")
@common.Controller("pollings")
export class PollingController extends PollingControllerBase {
  constructor(
    protected readonly service: PollingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
