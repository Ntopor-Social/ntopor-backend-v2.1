import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ShareModuleBase } from "./base/share.module.base";
import { ShareService } from "./share.service";
import { ShareController } from "./share.controller";
import { ShareResolver } from "./share.resolver";

@Module({
  imports: [ShareModuleBase, forwardRef(() => AuthModule)],
  controllers: [ShareController],
  providers: [ShareService, ShareResolver],
  exports: [ShareService],
})
export class ShareModule {}
