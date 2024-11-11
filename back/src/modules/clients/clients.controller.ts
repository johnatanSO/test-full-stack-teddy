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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('/clients')
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
  @ApiOperation({ summary: 'Cria um novo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso.' })
  create(@Body() createClientDto: CreateClientDto) {
    return this.createClientUseCase.execute(createClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os clientes' })
  findAll(@Query() { currentPage, pageLength }: GetClientsDto): Promise<any> {
    return this.getAllClientsUseCase.execute({
      currentPage,
      pageLength,
    });
  }

  @Get('selected')
  @ApiOperation({ summary: 'Lista os clientes selecionados' })
  findSelecteds() {
    return this.getSelectedClientsUseCase.execute();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta os clientes' })
  remove(@Param('id') id: string) {
    return this.deleteClientUseCase.execute(id);
  }

  @Put('clear-selection')
  @ApiOperation({
    summary: 'Remove os clientes selecionados com base em um array de ids',
  })
  clearSelection(@Body() { clientsIds }: ClearClientsSelectedDto) {
    return this.clearClientsSelectedUseCase.execute(clientsIds);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza os dados do cliente' })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.updateClientUseCase.execute(id, updateClientDto);
  }
}
