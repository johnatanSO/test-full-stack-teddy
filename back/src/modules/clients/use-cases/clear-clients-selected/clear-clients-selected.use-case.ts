import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../../entities/client.entity';
import { In, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClearClientsSelectedUseCase {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async execute(clientsIds: string[]): Promise<void> {
    await this.clientRepository.update(
      { id: In(clientsIds) },
      { selected: false },
    );
  }
}
