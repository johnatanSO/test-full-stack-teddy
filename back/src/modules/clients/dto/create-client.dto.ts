import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty({ message: 'Nome não informado' })
  @ApiProperty({ example: 'Johnatan Santos', description: 'Nome do cliente' })
  name: string;

  @IsNotEmpty({ message: 'Salário não informado' })
  @ApiProperty({ example: 1000, description: 'Salário' })
  salary: number;

  @IsNotEmpty({ message: 'Valor da empresa não informado' })
  @ApiProperty({ example: 100000, description: 'Valor da empresa' })
  companyValue: number;
}
