import { CreateClientDto } from '../dto/create-client.dto';
import { UpdateClientDto } from '../dto/update-client.dto';
import { Client } from '../entities/client.entity';

export interface ClientRepository {
  list({ selected }: { selected?: boolean }): Promise<Client[]>;
  delete(clientId: string): Promise<void>;
  create(data: CreateClientDto): Promise<Client>;
  update(id: string, data: UpdateClientDto): Promise<void>;
}
