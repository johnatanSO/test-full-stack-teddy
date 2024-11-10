import { IsNotEmpty } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty({ message: 'Nome não informado' })
  name: string;

  @IsNotEmpty({ message: 'Salário não informado' })
  salary: number;

  @IsNotEmpty({ message: 'Valor da empresa não informado' })
  companyValue: number;
}
