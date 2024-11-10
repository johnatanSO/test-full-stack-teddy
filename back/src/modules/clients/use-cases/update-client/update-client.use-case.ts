import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../../entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UpdateClientUseCase {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async execute(
    id: string,
    { companyValue, name, salary, selected }: UpdateClientDto,
  ): Promise<void> {
    await this.clientRepository.save({
      id,
      companyValue,
      name,
      salary,
      selected,
    });
  }
}
