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

Caso tenha algum problema com o docker, basta rodar os projetos manualmente, executando os comandos abaixo na pasta raiz do projeto: