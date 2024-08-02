import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TicketCanvasService } from "./ticketCanvas.service";
import { TicketCanvasControllerBase } from "./base/ticketCanvas.controller.base";

@swagger.ApiTags("ticketCanvas")
@common.Controller("ticketCanvas")
export class TicketCanvasController extends TicketCanvasControllerBase {
  constructor(
    protected readonly service: TicketCanvasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
