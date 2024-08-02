import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TicketPackageService } from "./ticketPackage.service";
import { TicketPackageControllerBase } from "./base/ticketPackage.controller.base";

@swagger.ApiTags("ticketPackages")
@common.Controller("ticketPackages")
export class TicketPackageController extends TicketPackageControllerBase {
  constructor(
    protected readonly service: TicketPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
