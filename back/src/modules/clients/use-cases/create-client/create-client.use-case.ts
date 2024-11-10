import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from '../../dto/create-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../../repositories/client-repository';

@Injectable()
export class CreateClientUseCase {
  constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: ClientRepository,
  ) {}

  async execute({
    companyValue,
    name,
    salary,
  }: CreateClientDto): Promise<Client> {
    const newClient = await this.clientRepository.create({
      name,
      companyValue,
      salary,
    });

    return newClient;
  }
}
