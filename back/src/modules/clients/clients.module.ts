import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { GetAllClientsUseCase } from './use-cases/get-all-clients/get-all-clients.use-case';
import { GetSelectedClientsUseCase } from './use-cases/get-selected-clients/get-selected-clients.use-case';
import { CreateClientUseCase } from './use-cases/create-client/create-client.use-case';
import { UpdateClientUseCase } from './use-cases/update-client/update-client.use-case';
import { DeleteClientUseCase } from './use-cases/delete-client/delete-client.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { TypeormClientRepository } from './repositories/implementations/typeorm-client.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [
    GetAllClientsUseCase,
    GetSelectedClientsUseCase,
    CreateClientUseCase,
    UpdateClientUseCase,
    DeleteClientUseCase,
    {
      provide: 'ClientRepository',
      useClass: TypeormClientRepository,
    },
  ],
})
export class ClientsModule {}
