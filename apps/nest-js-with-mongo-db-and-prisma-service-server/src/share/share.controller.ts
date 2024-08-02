import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShareService } from "./share.service";
import { ShareControllerBase } from "./base/share.controller.base";

@swagger.ApiTags("shares")
@common.Controller("shares")
export class ShareController extends ShareControllerBase {
  constructor(
    protected readonly service: ShareService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
