# Solução do desafio Warren - Web

Este é o repositório do código desenvolvido como solução para o [Desafio Warren - Web](https://github.com/warrenbrasil/desafio-warren-web) que foi realizado por Pedro Portella Possamai em Feveiro de 2022.

## Requisitos

Os requisitos contemplavam o desenvolvimento de uma aplicação web que implementasse uma tela de lista de transações, apresentando os principais dados relacionado a cada uma delas, e também uma tela de detalhes. As seguintes funcionalidades deveriam ser implementadas:
- Lista de transações agrupada por data
- Modal contendo os detalhes da transação
- Filtro por título
- Filtro por status

OBS: No repositório do desafio é possível observar sugestões de telas que poderiam, ou não, ser utilizadas como referência.

## Tecnologias

O desenvolvimento do projeto conta com o uso das seguintes tecnologias:
- Next.js & React
- TypeScript
- Prettier
- Docker
- Axios
- GIT
- CSS


## Como rodar o projeto

A aplicação foi construída com Docker e, portanto, pode ser executada com os seguintes passos:

1. Clonar o projeto:

```
git clone https://github.com/pportella23/warren-desafio-web.git
```

2. Adicionar arquivo .env.local:

```
$ cd warren-desafio-web
Adicionar um arquivo na raiz do projeto com o nome ".env.local".
O arquivo deve ter como conteúdo:
$ NEXT_PUBLIC_API_URL=https://warren-transactions-api.herokuapp.com/api
```

3. Buildar e executar o container:

```
$ docker build -t warren-desafio-web .
$ docker run --name warren-desafio-web -p 3000:3000 warren-desafio-web
```

Outra maneira de executar a aplicação, em seu ambiente de desenvolvimento e de forma local, pode ser feita seguindo:

1. Clonar o projeto:

```
git clone https://github.com/pportella23/warren-desafio-web.git
```

2. Adicionar arquivo .env.local:

```
$ cd warren-desafio-web
Adicionar um arquivo na raiz do projeto com o nome ".env.local".
O arquivo deve ter como conteúdo:
$ NEXT_PUBLIC_API_URL=https://warren-transactions-api.herokuapp.com/api
```

3. Buildar e executar o projeto:

```
$ npm install
$ npm run build
$ npm run start
```

## Deploy no Heroku

O projeto também encontra-se hospedado na plataforma Heroku e pode ser acessado [clicando aqui](https://warren-desafio-web.herokuapp.com/). Os passos necessários para realizar o seu deployment foram:

1. Criar o repositório do projeto

2. Criar um novo app no Heroku e vinculá-lo ao repositório criado

3. Criar a variável de ambiente em Config Vars das configurações do app Heroku:
```
NEXT_PUBLIC_API_URL = https://warren-transactions-api.herokuapp.com/api
```

4. Criar o pipeline de deployment automático com Github Actions

OBS: Confira deployment.yml contido no projeto para mais detalhes


## Considerações/Decisões Técnicas

- Workaround transação :id route:

Foi disponibilizado uma API para auxiliar no desenvolvimento do projeto. Os mocks das rotas disponíveis na API encontram-se descritos no readme do repositório do [Desafio Warren - Web](https://github.com/warrenbrasil/desafio-warren-web). A API possui duas rotas, a primeira que retorna a lista de todas as transações e a segunda que retorna as informações da transação do id informado como parametro. Essa segunda opção de rota foi testada com variados ids e retornou Erro 404 Não Encontrado para todos os casos. Sendo assim, para construção do modal de detalhes da transação foi necessário passar a lista de todas as transações por contexto e filtrar a transação do id desejado na lista de transações.

![route error](https://raw.githubusercontent.com/pportella23/warren-desafio-web/dev/route-error.png)