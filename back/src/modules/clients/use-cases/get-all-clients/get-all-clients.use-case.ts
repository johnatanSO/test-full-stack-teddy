import { Inject } from '@nestjs/common';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../../repositories/client-repository';

export class GetAllClientsUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}
  async execute(): Promise<Client[]> {
    return await this.clientRepository.list({});
  }
}
