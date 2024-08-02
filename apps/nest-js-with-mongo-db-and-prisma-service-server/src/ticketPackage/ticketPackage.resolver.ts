import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TicketPackageResolverBase } from "./base/ticketPackage.resolver.base";
import { TicketPackage } from "./base/TicketPackage";
import { TicketPackageService } from "./ticketPackage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TicketPackage)
export class TicketPackageResolver extends TicketPackageResolverBase {
  constructor(
    protected readonly service: TicketPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
