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
import { MediaController } from "../media.controller";
import { MediaService } from "../media.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dateCreated: new Date(),
  duration: "exampleDuration",
  height: 42,
  id: "exampleId",
  meta: "exampleMeta",
  thumbnail: "exampleThumbnail",
  updatedAt: new Date(),
  url: "exampleUrl",
  width: 42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dateCreated: new Date(),
  duration: "exampleDuration",
  height: 42,
  id: "exampleId",
  meta: "exampleMeta",
  thumbnail: "exampleThumbnail",
  updatedAt: new Date(),
  url: "exampleUrl",
  width: 42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dateCreated: new Date(),
    duration: "exampleDuration",
    height: 42,
    id: "exampleId",
    meta: "exampleMeta",
    thumbnail: "exampleThumbnail",
    updatedAt: new Date(),
    url: "exampleUrl",
    width: 42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dateCreated: new Date(),
  duration: "exampleDuration",
  height: 42,
  id: "exampleId",
  meta: "exampleMeta",
  thumbnail: "exampleThumbnail",
  updatedAt: new Date(),
  url: "exampleUrl",
  width: 42,
};

const service = {
  createMedia() {
    return CREATE_RESULT;
  },
  mediaItems: () => FIND_MANY_RESULT,
  media: ({ where }: { where: { id: string } }) => {
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

describe("Media", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MediaService,
          useValue: service,
        },
      ],
      controllers: [MediaController],
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

  test("POST /media", async () => {
    await request(app.getHttpServer())
      .post("/media")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateCreated: CREATE_RESULT.dateCreated.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /media", async () => {
    await request(app.getHttpServer())
      .get("/media")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateCreated: FIND_MANY_RESULT[0].dateCreated.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /media/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/media"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /media/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/media"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateCreated: FIND_ONE_RESULT.dateCreated.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /media existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/media")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateCreated: CREATE_RESULT.dateCreated.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/media")
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
