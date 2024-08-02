import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VoteEventResolverBase } from "./base/voteEvent.resolver.base";
import { VoteEvent } from "./base/VoteEvent";
import { VoteEventService } from "./voteEvent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VoteEvent)
export class VoteEventResolver extends VoteEventResolverBase {
  constructor(
    protected readonly service: VoteEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
