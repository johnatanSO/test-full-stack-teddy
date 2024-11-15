import { Injectable } from '@nestjs/common';
import { Client } from '../../entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class GetSelectedClientsUseCase {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async execute(): Promise<Client[]> {
    return await this.clientRepository.find({
      where: {
        selected: true,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
