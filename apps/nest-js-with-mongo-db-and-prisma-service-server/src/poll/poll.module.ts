import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PollModuleBase } from "./base/poll.module.base";
import { PollService } from "./poll.service";
import { PollController } from "./poll.controller";
import { PollResolver } from "./poll.resolver";

@Module({
  imports: [PollModuleBase, forwardRef(() => AuthModule)],
  controllers: [PollController],
  providers: [PollService, PollResolver],
  exports: [PollService],
})
export class PollModule {}
