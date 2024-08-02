import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { PollingModule } from "./polling/polling.module";
import { PostModule } from "./post/post.module";
import { EventModule } from "./event/event.module";
import { TicketModule } from "./ticket/ticket.module";
import { CommentModule } from "./comment/comment.module";
import { LocationModule } from "./location/location.module";
import { PollOptionModule } from "./pollOption/pollOption.module";
import { PollModule } from "./poll/poll.module";
import { MediaModule } from "./media/media.module";
import { DeviceInfoModule } from "./deviceInfo/deviceInfo.module";
import { MessageModule } from "./message/message.module";
import { WithdrawModule } from "./withdraw/withdraw.module";
import { TransactionModule } from "./transaction/transaction.module";
import { NotificationModule } from "./notification/notification.module";
import { LikeModule } from "./like/like.module";
import { ShareModule } from "./share/share.module";
import { ReportModule } from "./report/report.module";
import { VoteEventModule } from "./voteEvent/voteEvent.module";
import { VoteEventCandidateModule } from "./voteEventCandidate/voteEventCandidate.module";
import { VoteModule } from "./vote/vote.module";
import { TicketCanvasModule } from "./ticketCanvas/ticketCanvas.module";
import { TicketPackageModule } from "./ticketPackage/ticketPackage.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    PollingModule,
    PostModule,
    EventModule,
    TicketModule,
    CommentModule,
    LocationModule,
    PollOptionModule,
    PollModule,
    MediaModule,
    DeviceInfoModule,
    MessageModule,
    WithdrawModule,
    TransactionModule,
    NotificationModule,
    LikeModule,
    ShareModule,
    ReportModule,
    VoteEventModule,
    VoteEventCandidateModule,
    VoteModule,
    TicketCanvasModule,
    TicketPackageModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
