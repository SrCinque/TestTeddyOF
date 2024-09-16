# Meu Projeto

Um projeto feito para um teste técnico para a empresa BOLD. Ne construi uma API de serviço de encutar URL's, utilizando NODE.JS, EXPRES, PRISMA ORM e SQLite.

## Instalação

1. Clone o repositório: `https://github.com/SrCinque/TestTeddyOF`
2. Navegue até o diretório do projeto: `cd meu-projeto`
3. Execute o comando: `node install` e `npx prisma migrate dev --name init`


## Configuração

* **CASO QUEIRA RODAR A APLICAÇÃO EM UMA PORTA DIFERENTE DA 3000:** Edite a variável URL no arquivo .env.
*_exemplo: URL="http://localhost:{numero-da-porta}/"_

## Uso
* Inicie a API com o comando: `npm run dev`
* Acesse a API com algum API CLIENT(Insominia, PostMen. etc..) e uso a url base: _http://localhost:{numero-da-porta}/_
* A API tem os seguintes END-POINTS:
    + [LIST](#list)


** <a name="list"></a>LIST

## Contato

* Autor: [Filipe Amaro Cinque Santana](mailto:filipe.cinque@gmail.com)
