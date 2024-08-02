import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DeviceInfoResolverBase } from "./base/deviceInfo.resolver.base";
import { DeviceInfo } from "./base/DeviceInfo";
import { DeviceInfoService } from "./deviceInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DeviceInfo)
export class DeviceInfoResolver extends DeviceInfoResolverBase {
  constructor(
    protected readonly service: DeviceInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
