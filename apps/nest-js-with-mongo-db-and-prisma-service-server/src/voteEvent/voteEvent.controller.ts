import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoteEventService } from "./voteEvent.service";
import { VoteEventControllerBase } from "./base/voteEvent.controller.base";

@swagger.ApiTags("voteEvents")
@common.Controller("voteEvents")
export class VoteEventController extends VoteEventControllerBase {
  constructor(
    protected readonly service: VoteEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
