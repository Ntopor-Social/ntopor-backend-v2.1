import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PollingModuleBase } from "./base/polling.module.base";
import { PollingService } from "./polling.service";
import { PollingController } from "./polling.controller";
import { PollingResolver } from "./polling.resolver";

@Module({
  imports: [PollingModuleBase, forwardRef(() => AuthModule)],
  controllers: [PollingController],
  providers: [PollingService, PollingResolver],
  exports: [PollingService],
})
export class PollingModule {}
