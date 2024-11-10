import { Inject } from '@nestjs/common';
import { ClientRepository } from '../../repositories/client-repository';

export class DeleteClientUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}
  async execute(clientId: string): Promise<void> {
    await this.clientRepository.delete(clientId);
  }
}
