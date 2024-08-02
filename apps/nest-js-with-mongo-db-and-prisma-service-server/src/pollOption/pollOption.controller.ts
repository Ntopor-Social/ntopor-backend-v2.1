import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PollOptionService } from "./pollOption.service";
import { PollOptionControllerBase } from "./base/pollOption.controller.base";

@swagger.ApiTags("pollOptions")
@common.Controller("pollOptions")
export class PollOptionController extends PollOptionControllerBase {
  constructor(
    protected readonly service: PollOptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
