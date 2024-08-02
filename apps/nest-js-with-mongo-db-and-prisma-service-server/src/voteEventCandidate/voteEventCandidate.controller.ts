import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VoteEventCandidateService } from "./voteEventCandidate.service";
import { VoteEventCandidateControllerBase } from "./base/voteEventCandidate.controller.base";

@swagger.ApiTags("voteEventCandidates")
@common.Controller("voteEventCandidates")
export class VoteEventCandidateController extends VoteEventCandidateControllerBase {
  constructor(
    protected readonly service: VoteEventCandidateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
