import { OpenAPIObject } from '@nestjs/swagger';
import { IEnvironment } from './i.environment';

export const environment: IEnvironment = {
  production: true,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: +process.env.DB_PORT,
  dbUsername: process.env.DB_USER,
  logging: true,
  swaggerInitializer: () => ({} as OpenAPIObject),
};
