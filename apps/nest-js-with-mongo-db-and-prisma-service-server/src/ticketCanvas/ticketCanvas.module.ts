import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TicketCanvasModuleBase } from "./base/ticketCanvas.module.base";
import { TicketCanvasService } from "./ticketCanvas.service";
import { TicketCanvasController } from "./ticketCanvas.controller";
import { TicketCanvasResolver } from "./ticketCanvas.resolver";

@Module({
  imports: [TicketCanvasModuleBase, forwardRef(() => AuthModule)],
  controllers: [TicketCanvasController],
  providers: [TicketCanvasService, TicketCanvasResolver],
  exports: [TicketCanvasService],
})
export class TicketCanvasModule {}
