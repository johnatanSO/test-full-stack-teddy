import { Injectable } from '@nestjs/common';
import { Client } from '../../entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

interface IRequest {
  currentPage: number;
  pageLength: number;
}

interface IResponse {
  items: Client[];
  totalItems: number;
}

@Injectable()
export class GetAllClientsUseCase {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  async execute({ currentPage = 1, pageLength }: IRequest): Promise<IResponse> {
    const skip = (currentPage - 1) * pageLength;

    const [items, totalItems] = await this.clientRepository.findAndCount({
      skip,
      take: pageLength,
      order: {
        createdAt: 'DESC',
      },
    });

    return {
      items,
      totalItems,
    };
  }
}
