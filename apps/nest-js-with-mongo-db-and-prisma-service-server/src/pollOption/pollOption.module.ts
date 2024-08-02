import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PollOptionModuleBase } from "./base/pollOption.module.base";
import { PollOptionService } from "./pollOption.service";
import { PollOptionController } from "./pollOption.controller";
import { PollOptionResolver } from "./pollOption.resolver";

@Module({
  imports: [PollOptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [PollOptionController],
  providers: [PollOptionService, PollOptionResolver],
  exports: [PollOptionService],
})
export class PollOptionModule {}
