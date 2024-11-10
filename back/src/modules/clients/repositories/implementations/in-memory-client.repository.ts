import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientRepository } from '../client-repository';

export class InMemoryClientRepository implements ClientRepository {
  list({ selected }: { selected: boolean }): Promise<Client[]> {
    throw new Error('Method not implemented.');
  }
  delete(clientId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  create(data: CreateClientDto): Promise<Client> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: UpdateClientDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
