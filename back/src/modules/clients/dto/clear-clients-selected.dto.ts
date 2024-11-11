import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ClearClientsSelectedDto {
  @IsNotEmpty({ message: 'Array de ids não enviado' })
  @ApiProperty({
    example: [
      [
        '80019685-a3da-44c1-a384-71d56b75d6f0',
        '80019685-a3da-44c1-a384-71d56b75d6f0',
        '80019685-a3da-44c1-a384-71d56b75d6f0',
      ],
    ],
    description: 'Array com os ids dos clientes que serão removidos da seleção',
  })
  clientsIds: string[];
}
