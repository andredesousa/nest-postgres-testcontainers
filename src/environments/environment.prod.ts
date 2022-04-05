import { OpenAPIObject } from '@nestjs/swagger';
import { IEnvironment } from './i.environment';

export const environment: IEnvironment = {
  production: true,
  dbHost: process.env.DB_HOST,
  dbPort: +process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  logging: true,
  swaggerInitializer: () => ({} as OpenAPIObject),
};
