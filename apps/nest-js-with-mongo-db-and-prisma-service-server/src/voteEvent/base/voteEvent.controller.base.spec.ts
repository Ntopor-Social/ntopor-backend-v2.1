import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { VoteEventController } from "../voteEvent.controller";
import { VoteEventService } from "../voteEvent.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accumulated: 42,
  balance: 42,
  createdAt: new Date(),
  currency: "exampleCurrency",
  dateCreated: new Date(),
  endDate: new Date(),
  eventBio: "exampleEventBio",
  eventLink: "exampleEventLink",
  eventName: "exampleEventName",
  gallery: "exampleGallery",
  id: "exampleId",
  isFeatured: "true",
  isPrivate: "true",
  startDate: new Date(),
  ticketsSold: "exampleTicketsSold",
  updatedAt: new Date(),
  voteLimit: "exampleVoteLimit",
  votePrice: 42,
  votesAvailable: 42,
  votesPerUser: "exampleVotesPerUser",
};
const CREATE_RESULT = {
  accumulated: 42,
  balance: 42,
  createdAt: new Date(),
  currency: "exampleCurrency",
  dateCreated: new Date(),
  endDate: new Date(),
  eventBio: "exampleEventBio",
  eventLink: "exampleEventLink",
  eventName: "exampleEventName",
  gallery: "exampleGallery",
  id: "exampleId",
  isFeatured: "true",
  isPrivate: "true",
  startDate: new Date(),
  ticketsSold: "exampleTicketsSold",
  updatedAt: new Date(),
  voteLimit: "exampleVoteLimit",
  votePrice: 42,
  votesAvailable: 42,
  votesPerUser: "exampleVotesPerUser",
};
const FIND_MANY_RESULT = [
  {
    accumulated: 42,
    balance: 42,
    createdAt: new Date(),
    currency: "exampleCurrency",
    dateCreated: new Date(),
    endDate: new Date(),
    eventBio: "exampleEventBio",
    eventLink: "exampleEventLink",
    eventName: "exampleEventName",
    gallery: "exampleGallery",
    id: "exampleId",
    isFeatured: "true",
    isPrivate: "true",
    startDate: new Date(),
    ticketsSold: "exampleTicketsSold",
    updatedAt: new Date(),
    voteLimit: "exampleVoteLimit",
    votePrice: 42,
    votesAvailable: 42,
    votesPerUser: "exampleVotesPerUser",
  },
];
const FIND_ONE_RESULT = {
  accumulated: 42,
  balance: 42,
  createdAt: new Date(),
  currency: "exampleCurrency",
  dateCreated: new Date(),
  endDate: new Date(),
  eventBio: "exampleEventBio",
  eventLink: "exampleEventLink",
  eventName: "exampleEventName",
  gallery: "exampleGallery",
  id: "exampleId",
  isFeatured: "true",
  isPrivate: "true",
  startDate: new Date(),
  ticketsSold: "exampleTicketsSold",
  updatedAt: new Date(),
  voteLimit: "exampleVoteLimit",
  votePrice: 42,
  votesAvailable: 42,
  votesPerUser: "exampleVotesPerUser",
};

const service = {
  createVoteEvent() {
    return CREATE_RESULT;
  },
  voteEvents: () => FIND_MANY_RESULT,
  voteEvent: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("VoteEvent", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VoteEventService,
          useValue: service,
        },
      ],
      controllers: [VoteEventController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /voteEvents", async () => {
    await request(app.getHttpServer())
      .post("/voteEvents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateCreated: CREATE_RESULT.dateCreated.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /voteEvents", async () => {
    await request(app.getHttpServer())
      .get("/voteEvents")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateCreated: FIND_MANY_RESULT[0].dateCreated.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /voteEvents/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/voteEvents"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /voteEvents/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/voteEvents"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateCreated: FIND_ONE_RESULT.dateCreated.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /voteEvents existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/voteEvents")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateCreated: CREATE_RESULT.dateCreated.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/voteEvents")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
