import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WithdrawModuleBase } from "./base/withdraw.module.base";
import { WithdrawService } from "./withdraw.service";
import { WithdrawController } from "./withdraw.controller";
import { WithdrawResolver } from "./withdraw.resolver";

@Module({
  imports: [WithdrawModuleBase, forwardRef(() => AuthModule)],
  controllers: [WithdrawController],
  providers: [WithdrawService, WithdrawResolver],
  exports: [WithdrawService],
})
export class WithdrawModule {}
