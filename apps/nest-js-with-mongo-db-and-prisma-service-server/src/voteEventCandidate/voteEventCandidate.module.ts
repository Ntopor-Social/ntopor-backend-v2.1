import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoteEventCandidateModuleBase } from "./base/voteEventCandidate.module.base";
import { VoteEventCandidateService } from "./voteEventCandidate.service";
import { VoteEventCandidateController } from "./voteEventCandidate.controller";
import { VoteEventCandidateResolver } from "./voteEventCandidate.resolver";

@Module({
  imports: [VoteEventCandidateModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoteEventCandidateController],
  providers: [VoteEventCandidateService, VoteEventCandidateResolver],
  exports: [VoteEventCandidateService],
})
export class VoteEventCandidateModule {}
