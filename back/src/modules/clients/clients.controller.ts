import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Inject,
  Query,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { GetAllClientsUseCase } from './use-cases/get-all-clients/get-all-clients.use-case';
import { CreateClientUseCase } from './use-cases/create-client/create-client.use-case';
import { UpdateClientUseCase } from './use-cases/update-client/update-client.use-case';
import { DeleteClientUseCase } from './use-cases/delete-client/delete-client.use-case';
import { GetSelectedClientsUseCase } from './use-cases/get-selected-clients/get-selected-clients.use-case';
import { ClearClientsSelectedUseCase } from './use-cases/clear-clients-selected/clear-clients-selected.use-case';
import { ClearClientsSelectedDto } from './dto/clear-clients-selected.dto';
import { GetClientsDto } from './dto/get-clients.dto';

@Controller('clients')
export class ClientsController {
  @Inject(GetAllClientsUseCase)
  private readonly getAllClientsUseCase: GetAllClientsUseCase;

  @Inject(CreateClientUseCase)
  private readonly createClientUseCase: CreateClientUseCase;

  @Inject(UpdateClientUseCase)
  private readonly updateClientUseCase: UpdateClientUseCase;

  @Inject(DeleteClientUseCase)
  private readonly deleteClientUseCase: DeleteClientUseCase;

  @Inject(GetSelectedClientsUseCase)
  private readonly getSelectedClientsUseCase: GetSelectedClientsUseCase;

  @Inject(ClearClientsSelectedUseCase)
  private readonly clearClientsSelectedUseCase: ClearClientsSelectedUseCase;

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.createClientUseCase.execute(createClientDto);
  }

  @Get()
  findAll(@Query() { currentPage, pageLength }: GetClientsDto): Promise<any> {
    return this.getAllClientsUseCase.execute({
      currentPage,
      pageLength,
    });
  }

  @Get('selected')
  findSelecteds() {
    return this.getSelectedClientsUseCase.execute();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteClientUseCase.execute(id);
  }

  @Put('clear-selection')
  clearSelection(@Body() { clientsIds }: ClearClientsSelectedDto) {
    return this.clearClientsSelectedUseCase.execute(clientsIds);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.updateClientUseCase.execute(id, updateClientDto);
  }
}
