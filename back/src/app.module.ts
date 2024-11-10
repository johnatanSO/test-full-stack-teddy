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
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/modules/**/entities/*.entity{.js,.ts}'],
    }),
    ClientsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
