import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PostgreSqlContainer } from 'testcontainers';
import * as request from 'supertest';
import { environment } from '../../src/environments/environment';
import { AppModule } from '../../src/app/app.module';
import { ProductDto } from '../../src/app/dtos/product.dto';

describe('App (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const pg = await new PostgreSqlContainer('postgres')
      .withExposedPorts(5432)
      .withDatabase('nest')
      .withUsername('root')
      .withPassword('secret')
      .start();

    environment.dbPort = pg.getMappedPort(5432);
    environment.logging = false;

    const moduleFixture = await Test.createTestingModule({ imports: [AppModule] }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/ (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/');

    expect(response.status).toBe(200);
  });

  it('/ (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/')
      .send({ name: 'Milk', currency: '€', price: 0.65, quantity: 1, unit: 'L' } as ProductDto);

    expect(response.status).toBe(201);
  });

  it('/{id} (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/1');

    expect(response.status).toBe(200);
  });

  it('/{id} (PUT)', async () => {
    const response = await request(app.getHttpServer())
      .put('/1')
      .send({ id: 1, name: 'Fresh Milk', currency: '€', price: 0.65, quantity: 1, unit: 'L' } as ProductDto);

    expect(response.status).toBe(200);
  });

  it('/{id} (DELETE)', async () => {
    const response = await request(app.getHttpServer()).delete('/1');

    expect(response.status).toBe(200);
  });
});
