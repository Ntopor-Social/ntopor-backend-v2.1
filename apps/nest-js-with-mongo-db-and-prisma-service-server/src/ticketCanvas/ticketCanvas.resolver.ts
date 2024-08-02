import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TicketCanvasResolverBase } from "./base/ticketCanvas.resolver.base";
import { TicketCanvas } from "./base/TicketCanvas";
import { TicketCanvasService } from "./ticketCanvas.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TicketCanvas)
export class TicketCanvasResolver extends TicketCanvasResolverBase {
  constructor(
    protected readonly service: TicketCanvasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
