import { Inject } from '@nestjs/common';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { ClientRepository } from '../../repositories/client-repository';

export class UpdateClientUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}
  async execute(
    id: string,
    { companyValue, name, salary, selected }: UpdateClientDto,
  ): Promise<void> {
    await this.clientRepository.update(id, {
      companyValue,
      name,
      salary,
      selected,
    });
  }
}
