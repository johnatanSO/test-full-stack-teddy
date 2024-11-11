DEPLOY FRONT-END:

https://test-full-stack-teddy.vercel.app/


DEPLOY BACKEND: http://ec2-54-173-184-229.compute-1.amazonaws.com:3000




# Teste paga vaga full stack

## Formas de rodar o projeto
  1. Docker Compose
  2. NPM
  3. Deploy (AWS para o backend e Vercel para o frontend)

## Docker:
  - Necessário ter o Docker e o Docker Compose instalados

  ### Como rodar

  1. Clone o repositório com o front e o back:
    git clone <url-do-repositorio>

  2. Entre na pasta do projeto:
    cd teste-full-stack-teddy

  3. Execute os containers com o docker-compose (Cria container do backend, frontand e banco de dados):
    docker-compose up --build

  4. Acessar a aplicação:
    frontend: http://localhost:3200
  backend: http://localhost:3000

## NPM:
  - Necessário ter o node 20+ instalado

  ## Como rodar:
  1. Clone o repositório com o front e o back:
    git clone <url-do-repositorio>

  ### Frontend:
  1. Entre na pasta do front:
    cd teste-full-stack-teddy/front
  
  2. Instale as dependências:
    npm install

  3. Rodando a aplicação
    npm run dev
  
  ### Backend:
  1. Entre na pasta do back:
    cd teste-full-stack-teddy/back

  2. Instale as dependências:
    npm install

  3. Rodando a aplicação
    npm run start:dev

## Deploy
  - IMPORTANTE LER!!!!
  - O Deploy do backend foi feito na AWS em um servidor EC2 que não possui um certificado SSL, então para acessar rodar corretamente a aplicação pelo navegador, são necessários alguns passos:

  1. Acesse os link do front: https://test-full-stack-teddy.vercel.app/
  2. O navegador irá bloquear as requisições por considerar elas não seguras, é necessário 'habilitar o site' para fazer requisições não seguras, vou anexar imagens de como fazer.

  3. Liberada a conexão, é só recarregar a página e pronto

  

### Tecnologias utilizadas
  - Reactjs
  - Vite
  - React hook forms + zod para validação
  - Typescript
  - SCSS
  - Nestjs
  - PostgreSQL
  - TypeORM
  - AWS (EC2)
  - Docker
  - Docker-compose