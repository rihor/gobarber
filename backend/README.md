## #Go Barber

Aplicação desenvolvida seguindo o bootcamp GoStack, da [Rocketseat](https://rocketseat.com.br/) 🚀.

Intuito do projeto era fazer um aplicativo de gestão de barbeária, mas serve para qualquer serviço parecido.

## Setup de produção

### Setup básico

Primeiro de tudo você precisa ter o [node](https://nodejs.org/) e o [yarn](https://yarnpkg.com) instalados.

### Variáveis de ambiente

**`.env.example`** Tem todas as variáveis de ambiente, basta preencher elas. Depois de preencher elas é só criar o arquivo **`.env`** com tudo preenchido.

Estou utilizando 3 bancos de dados. Portanto utilizar o [Docker](https://docker.com) é uma boa ideia.

Você vai precisar criar uma imagem de **Postgres**, **Mongo** e **Redis**.

#### Intruções de como criar imagens

Postgres: https://hub.docker.com/_/postgres

Mongo: https://hub.docker.com/_/mongo

Redis: https://hub.docker.com/_/redis/

### Iniciar o projeto

Para iniciar o projeto e ver ele rodando você precisará ter 2 terminais funcionando. Um para o aplicativo e outro para a fila do Redis.

#### Comandos

**`yarn dev`** Inicia o aplicativo.
**`yarn queue`** Inicia a fila do Redis.

A porta que o aplicativo vai estar rodando é **3333**.

Caso tenha algum erro ou alguma dúvida por favor me pergunte.

É isso, se divirta. :)
