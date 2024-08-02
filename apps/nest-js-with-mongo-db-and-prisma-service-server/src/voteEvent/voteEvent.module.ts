import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoteEventModuleBase } from "./base/voteEvent.module.base";
import { VoteEventService } from "./voteEvent.service";
import { VoteEventController } from "./voteEvent.controller";
import { VoteEventResolver } from "./voteEvent.resolver";

@Module({
  imports: [VoteEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoteEventController],
  providers: [VoteEventService, VoteEventResolver],
  exports: [VoteEventService],
})
export class VoteEventModule {}
