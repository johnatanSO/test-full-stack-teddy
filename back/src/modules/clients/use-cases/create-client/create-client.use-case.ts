import { Injectable } from '@nestjs/common';
import { CreateClientDto } from '../../dto/create-client.dto';
import { Client } from '../../entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CreateClientUseCase {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async execute({
    companyValue,
    name,
    salary,
  }: CreateClientDto): Promise<Client> {
    const newClient = this.clientRepository.create({
      name,
      companyValue,
      salary,
    });

    return await this.clientRepository.save(newClient);
  }
}
