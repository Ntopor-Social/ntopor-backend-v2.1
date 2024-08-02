import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WithdrawResolverBase } from "./base/withdraw.resolver.base";
import { Withdraw } from "./base/Withdraw";
import { WithdrawService } from "./withdraw.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Withdraw)
export class WithdrawResolver extends WithdrawResolverBase {
  constructor(
    protected readonly service: WithdrawService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
