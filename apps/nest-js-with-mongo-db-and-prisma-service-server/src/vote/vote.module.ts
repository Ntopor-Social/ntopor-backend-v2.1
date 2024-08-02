import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoteModuleBase } from "./base/vote.module.base";
import { VoteService } from "./vote.service";
import { VoteController } from "./vote.controller";
import { VoteResolver } from "./vote.resolver";

@Module({
  imports: [VoteModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoteController],
  providers: [VoteService, VoteResolver],
  exports: [VoteService],
})
export class VoteModule {}
