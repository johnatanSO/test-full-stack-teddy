import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @ApiProperty({
    example: true,
    description: 'Campo que define se o cliente foi selecionado ou não',
  })
  selected?: boolean;

  @ApiProperty({
    example: 'Johnatan Santos Editado',
    description: 'Atualiza o nome do cliente',
  })
  name?: string;

  @ApiProperty({ example: 1500, description: 'Atualiza o salário' })
  salary?: number;

  @ApiProperty({ example: 105000, description: 'Atualiza o valor da empresa' })
  companyValue?: number;
}
