import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoteService } from "./vote.service";
import { VoteControllerBase } from "./base/vote.controller.base";

@swagger.ApiTags("votes")
@common.Controller("votes")
export class VoteController extends VoteControllerBase {
  constructor(
    protected readonly service: VoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
