import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetClientsDto {
  @IsNotEmpty({ message: 'Quantidade de itens por página não enviado' })
  @ApiProperty({ example: 16, description: 'Quantidade de itens por página' })
  pageLength: number;

  @IsNotEmpty({ message: 'Página não enviada' })
  @ApiProperty({ example: 1, description: 'Página atual' })
  currentPage: number;
}
