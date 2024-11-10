import { ILoginDTO } from '../../../types/dtos/user/ILoginDTO';
import { v4 as uuidv4 } from 'uuid';

export async function loginService({ name }: ILoginDTO) {
  // Em uma aplicação real, isso aqui seria uma requisição de autenticação para o backend,
  // enviando nome, senha, etc... e retornando os dados do usuário

  // Mais ou menos assim:

  // return await axios.post('/users', {
  //   name,
  //   password,
  //   email,
  //   ...
  // })

  // Como o desafio pede somente o nome, estou retornando ele diretamente.
  
  // Criando um delay fake
  await (async () => new Promise(resolve => setTimeout(resolve, 1000)))()
  return {
    data: {
      name,
      id: uuidv4()
    }
  }
}