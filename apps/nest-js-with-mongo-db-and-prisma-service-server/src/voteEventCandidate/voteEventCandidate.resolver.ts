import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoteEventCandidateResolverBase } from "./base/voteEventCandidate.resolver.base";
import { VoteEventCandidate } from "./base/VoteEventCandidate";
import { VoteEventCandidateService } from "./voteEventCandidate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoteEventCandidate)
export class VoteEventCandidateResolver extends VoteEventCandidateResolverBase {
  constructor(
    protected readonly service: VoteEventCandidateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
