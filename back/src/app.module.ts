import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from './modules/clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
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
    ClientsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
