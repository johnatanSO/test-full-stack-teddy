import { InjectRepository } from '@nestjs/typeorm';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../client-repository';
import { Repository } from 'typeorm';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeormClientRepository implements ClientRepository {
  constructor(
    @InjectRepository(Client) private clientsRepository: Repository<Client>,
  ) {}

  async list({ selected }: { selected: boolean }): Promise<Client[]> {
    return await this.clientsRepository.findBy({
      ...(selected ? { selected } : {}),
    });
  }

  async delete(clientId: string): Promise<void> {
    await this.clientsRepository.delete(clientId);
  }

  async create(data: CreateClientDto): Promise<Client> {
    const newClient = this.clientsRepository.create(data);

    return await this.clientsRepository.save(newClient);
  }

  async update(id: string, data: UpdateClientDto): Promise<void> {
    await this.clientsRepository.save({ id, ...data });
  }
}
