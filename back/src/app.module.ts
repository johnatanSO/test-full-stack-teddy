import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from './modules/clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {} from '../src/modules/clients/entities/client.entity';

@Module({
  imports: [
    ClientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../src/modules/**/entities/*.entity{.js,.ts}'],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
