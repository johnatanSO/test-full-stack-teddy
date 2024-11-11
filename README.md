# Teste paga vaga full stack 💻

## Sobre
- Esta é uma aplicação de desafio para a vaga de full stack com funcionalidades de:
  - Identificação de usuário;
  - Listagem de clientes;
  - Cadastro de cliente;
  - Edição de cliente;
  - Seleção de clientes;
  - Exclusão de clientes;
  - Página com clientes selecionados;
  - Opção para limpar clientes selecionados;
- Especificações técnicas:
  - Roteamento de páginas no front;
  - Requisições HTTP com Axios;
  - Tipagem com Typescript;
  - Validação de formulários com REACT HOOK FORM + ZOD;
  - ContextAPI para salvar usuário em localstorage e um state compartilhado;
  - Paginação no backend;
  - Banco de dados PostgreSQL;
  - Gerenciamento de containers com docker e docker-compose;
  - Pipelines de CI/CD com o GITHUB ACTIONS;
  - Deploy do backend na AWS (EC2);
  - Deploy do frontend na Vercel;

## Formas de rodar o projeto
  1. Docker Compose
  2. NPM
  3. Deploy (AWS para o backend e Vercel para o frontend)

## Rodando com Docker:
  - Necessário ter o Docker e o Docker Compose instalados.

  ### Como rodar

  1. **Clone o repositório com as pastas front e back:**
 ```bash
    git clone https://github.com/johnatanSO/test-full-stack-teddy
 ```

  2. **Entre na pasta do projeto:**
 ```bash
    cd test-full-stack-teddy
 ````

  3. **Execute os containers com o docker-compose (Cria container do backend, frontand e banco de dados):**
 ```bash
    docker-compose up --build
 ````

  4. **Acessar a aplicação:** <br>
    frontend: http://localhost:3200 <br>
    backend: http://localhost:3000

<hr/>

## Rodando no Deploy
  - ### IMPORTANTE LER!!!!
  - O Deploy do backend foi feito na AWS em um servidor EC2 que não possui um certificado SSL, então para acessar corretamente a aplicação pelo navegador, são necessários alguns passos:

  1. Acesse os link do front: <br>
  https://test-full-stack-teddy.vercel.app/
  2. O navegador irá bloquear as requisições por considerar elas não seguras pela falta do certificado SSL, é necessário liberar as conexões não seguras para que a alicação faça as requisições corretamente, vou anexar imagens de como fazer;
  3. Para liberar, basta clicar ao lado esquerdo da URL nas informações do site, depois em "Configurações do site", e depois procurar pelo campo "Conteúdo não seguro" e alterar de 'Bloquear' para 'Permitir;
  4. ![image](https://github.com/user-attachments/assets/9a445470-f616-4709-abe9-484f9429d2f7)
  5. ![image](https://github.com/user-attachments/assets/fad18903-dfa8-49c5-b7ad-d17b48fed114)
  6. ![image](https://github.com/user-attachments/assets/705a37c7-5ce0-4e28-b131-41258d2f9b62)
  7. Depois de permitir, é só recarregar a página e pronto


### Backend na AWS EC2
URL: http://ec2-54-173-184-229.compute-1.amazonaws.com:3000/


<hr/>


## Rodando com NPM:
  - Necessário ter o node 20+ instalado.

  ### Como rodar:
  1. Clone o repositório com o front e o back:
  ```bash
    git clone https://github.com/johnatanSO/test-full-stack-teddy
  ```
  
  ### Frontend:
  1. **Entre na pasta do front:**
  ```bash
     cd teste-full-stack-teddy/front
  ```
   
  2. **Instale as dependências:**
  ```bash
    npm install
  ```

  3. **Rodando a aplicação:**
  ```bash
    npm run dev
  ```
  
  ### Backend:
  1. **Entre na pasta do back:**
  ```bash
    cd teste-full-stack-teddy/back
  ```

  2. **Instale as dependências:**
  ```bash
    npm install
  ```

  3. **Rodando a aplicação:**
  ```bash
    npm run start:dev
  ```


<hr/>

## 🚀 Tecnologias utilizadas
  - Reactjs
  - Vite
  - React hook forms + zod para validação
  - Typescript
  - SCSS
  - Nestjs
  - PostgreSQL
  - TypeORM
  - AWS (EC2)
  - Github actions para criar pipelines
  - Docker
  - Docker-compose

## Imagens do projeto (DESKTOP):

### Tela inicial
![image](https://github.com/user-attachments/assets/963b4c7c-d7f3-46c0-b424-06f0eb00d485)

### Clientes
![image](https://github.com/user-attachments/assets/3cacded0-2e99-486e-b560-18821dcb72cd)

### Lista vazia
![image](https://github.com/user-attachments/assets/c9a6789d-6e4f-4fb6-8184-f776ba680d72)

### Sidebar
![image](https://github.com/user-attachments/assets/cad8066e-25c8-4958-8bb5-f14a99956b3e)

### Modal de edição/cadastro
![image](https://github.com/user-attachments/assets/04cb29bc-ac29-40a6-97c0-9cbb9a9025c7)

### Modal para excluir cliente
![image](https://github.com/user-attachments/assets/a6752424-9e3a-4e4f-8d38-5ab1323945a7)

### Clientes selecionados
![image](https://github.com/user-attachments/assets/a69101b9-78f5-481f-b5b6-c514defae30d)


## Imagens do projeto (MOBILE):

### Tela inicial
![image](https://github.com/user-attachments/assets/0d14a493-598d-46c3-af99-b3fcaf5e3ed6)

### Clientes
![image](https://github.com/user-attachments/assets/4c7df5a8-81e4-4c24-b82a-2ace6cadf941)

### Lista vazia
![image](https://github.com/user-attachments/assets/ab28686e-17e7-4fce-84a8-e12931a4643f)

### Sidebar
![image](https://github.com/user-attachments/assets/a54e0f40-614c-48e0-b249-4ee835b87386)

### Modal edição/cadastro
![image](https://github.com/user-attachments/assets/50c1a2c0-18c7-47ef-abef-d7309d8a9413)

### Modal para excluir cliente
![image](https://github.com/user-attachments/assets/643fa648-6bac-4c03-acdf-00eae0af9f8a)

### Clientes selecionados
![image](https://github.com/user-attachments/assets/708d8d4b-9538-4a30-bf12-491c5e867037)
