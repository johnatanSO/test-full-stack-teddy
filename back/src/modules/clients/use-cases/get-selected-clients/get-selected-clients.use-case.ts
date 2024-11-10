import { Inject } from '@nestjs/common';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../../repositories/client-repository';

export class GetSelectedClientsUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}
  async execute(): Promise<Client[]> {
    return await this.clientRepository.list({ selected: true });
  }
}
