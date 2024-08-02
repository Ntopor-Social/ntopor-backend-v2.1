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
import { EventController } from "../event.controller";
import { EventService } from "../event.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  accumulated: 42.42,
  balance: 42.42,
  createdAt: new Date(),
  dateCreated: new Date(),
  eventBio: "exampleEventBio",
  eventDate: new Date(),
  eventLink: "exampleEventLink",
  eventLocation: "exampleEventLocation",
  eventName: "exampleEventName",
  featuredImage: "exampleFeaturedImage",
  galerry: "exampleGalerry",
  gallery: "exampleGallery",
  id: "exampleId",
  isActive: "true",
  isFeatured: "true",
  isPrivate: "true",
  isTicketAvailable: "true",
  ticketAvailableCount: "exampleTicketAvailableCount",
  ticketCount: "exampleTicketCount",
  ticketsSold: "exampleTicketsSold",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  accumulated: 42.42,
  balance: 42.42,
  createdAt: new Date(),
  dateCreated: new Date(),
  eventBio: "exampleEventBio",
  eventDate: new Date(),
  eventLink: "exampleEventLink",
  eventLocation: "exampleEventLocation",
  eventName: "exampleEventName",
  featuredImage: "exampleFeaturedImage",
  galerry: "exampleGalerry",
  gallery: "exampleGallery",
  id: "exampleId",
  isActive: "true",
  isFeatured: "true",
  isPrivate: "true",
  isTicketAvailable: "true",
  ticketAvailableCount: "exampleTicketAvailableCount",
  ticketCount: "exampleTicketCount",
  ticketsSold: "exampleTicketsSold",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    accumulated: 42.42,
    balance: 42.42,
    createdAt: new Date(),
    dateCreated: new Date(),
    eventBio: "exampleEventBio",
    eventDate: new Date(),
    eventLink: "exampleEventLink",
    eventLocation: "exampleEventLocation",
    eventName: "exampleEventName",
    featuredImage: "exampleFeaturedImage",
    galerry: "exampleGalerry",
    gallery: "exampleGallery",
    id: "exampleId",
    isActive: "true",
    isFeatured: "true",
    isPrivate: "true",
    isTicketAvailable: "true",
    ticketAvailableCount: "exampleTicketAvailableCount",
    ticketCount: "exampleTicketCount",
    ticketsSold: "exampleTicketsSold",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  accumulated: 42.42,
  balance: 42.42,
  createdAt: new Date(),
  dateCreated: new Date(),
  eventBio: "exampleEventBio",
  eventDate: new Date(),
  eventLink: "exampleEventLink",
  eventLocation: "exampleEventLocation",
  eventName: "exampleEventName",
  featuredImage: "exampleFeaturedImage",
  galerry: "exampleGalerry",
  gallery: "exampleGallery",
  id: "exampleId",
  isActive: "true",
  isFeatured: "true",
  isPrivate: "true",
  isTicketAvailable: "true",
  ticketAvailableCount: "exampleTicketAvailableCount",
  ticketCount: "exampleTicketCount",
  ticketsSold: "exampleTicketsSold",
  updatedAt: new Date(),
};

const service = {
  createEvent() {
    return CREATE_RESULT;
  },
  events: () => FIND_MANY_RESULT,
  event: ({ where }: { where: { id: string } }) => {
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

describe("Event", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: EventService,
          useValue: service,
        },
      ],
      controllers: [EventController],
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

  test("POST /events", async () => {
    await request(app.getHttpServer())
      .post("/events")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateCreated: CREATE_RESULT.dateCreated.toISOString(),
        eventDate: CREATE_RESULT.eventDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /events", async () => {
    await request(app.getHttpServer())
      .get("/events")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateCreated: FIND_MANY_RESULT[0].dateCreated.toISOString(),
          eventDate: FIND_MANY_RESULT[0].eventDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /events/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/events"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /events/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/events"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateCreated: FIND_ONE_RESULT.dateCreated.toISOString(),
        eventDate: FIND_ONE_RESULT.eventDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /events existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/events")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateCreated: CREATE_RESULT.dateCreated.toISOString(),
        eventDate: CREATE_RESULT.eventDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/events")
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
