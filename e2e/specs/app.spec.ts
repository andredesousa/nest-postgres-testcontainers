import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PostgreSqlContainer, StartedTestContainer } from 'testcontainers';
import * as request from 'supertest';
import { AppModule } from '../../src/app/app.module';

describe('App (e2e)', () => {
  let app: INestApplication;
  let pg: StartedTestContainer;

  beforeEach(async () => {
    pg = await new PostgreSqlContainer('postgres')
      .withExposedPorts(5432)
      .withDatabase('nest')
      .withUsername('root')
      .withPassword('secret')
      .start();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('/ (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/');

    expect(response.status).toBe(200);
  });
});
