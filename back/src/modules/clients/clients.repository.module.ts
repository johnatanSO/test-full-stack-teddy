import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { TypeormClientRepository } from './repositories/implementations/typeorm-client.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [
    {
      provide: 'ClientRepository',
      useClass: TypeormClientRepository,
    },
  ],
  exports: ['ClientRepository'],
})
export class ClientsRepositoryModule {}
