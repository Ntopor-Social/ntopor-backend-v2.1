import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TicketPackageModuleBase } from "./base/ticketPackage.module.base";
import { TicketPackageService } from "./ticketPackage.service";
import { TicketPackageController } from "./ticketPackage.controller";
import { TicketPackageResolver } from "./ticketPackage.resolver";

@Module({
  imports: [TicketPackageModuleBase, forwardRef(() => AuthModule)],
  controllers: [TicketPackageController],
  providers: [TicketPackageService, TicketPackageResolver],
  exports: [TicketPackageService],
})
export class TicketPackageModule {}
