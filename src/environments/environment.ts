import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { IEnvironment } from './i.environment';

// This file can be replaced during build by using webpack plugin.
// `nest build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `webpack.config.js`.

function swaggerInitializer(app: INestApplication): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle('NestJS Web API')
    .setDescription('An example of NestJS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  return document;
}

export const environment: IEnvironment = {
  production: false,
  dbHost: 'localhost',
  dbPort: 5432,
  dbName: 'nest',
  dbUsername: 'root',
  dbPassword: 'secret',
  logging: true,
  swaggerInitializer,
};
