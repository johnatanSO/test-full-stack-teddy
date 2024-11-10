import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../../entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteClientUseCase {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async execute(clientId: string): Promise<void> {
    await this.clientRepository.delete(clientId);
  }
}
