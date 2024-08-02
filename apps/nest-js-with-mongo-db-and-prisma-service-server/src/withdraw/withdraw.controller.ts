import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WithdrawService } from "./withdraw.service";
import { WithdrawControllerBase } from "./base/withdraw.controller.base";

@swagger.ApiTags("withdraws")
@common.Controller("withdraws")
export class WithdrawController extends WithdrawControllerBase {
  constructor(
    protected readonly service: WithdrawService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
