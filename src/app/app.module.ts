import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { environment } from '../environments/environment';
import { ProductController } from './controllers/product.controller';
import { Product } from './entities/product';
import { ProductService } from './services/product.service';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: environment.dbHost,
        port: environment.dbPort,
        username: environment.dbUsername,
        password: environment.dbPassword,
        database: environment.dbName,
        logging: environment.logging,
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    SequelizeModule.forFeature([Product]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
