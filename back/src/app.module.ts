import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsResolver } from './modules/clients/clients.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ClientsResolver],
})
export class AppModule {}
