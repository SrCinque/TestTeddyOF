# Projeto

Um projeto feito para um teste técnico para a empresa BOLD. Ne construi uma API de serviço de encutar URL's, utilizando NODE.JS, EXPRES, PRISMA ORM e SQLite.

## Instalação

1. Clone o repositório: `https://github.com/SrCinque/TestTeddyOF`
2. Navegue até o diretório do projeto
3. Execute o comando: `node install` e `npx prisma migrate dev --name init`


## Configuração

* **CASO QUEIRA RODAR A APLICAÇÃO EM UMA PORTA DIFERENTE DA 3000:** Edite a variável URL no arquivo .env.
*_exemplo: URL="http://localhost:{numero-da-porta}/"_

## Uso
* Inicie a API com o comando: `npm run dev`
* Para ter uma melhor vizualização de como a aplicação está lidando com o banco de dados, use o comando `npx prisma studio`.**RODE EM UM SEGUNDO TERMINAL**
* Acesse a API com algum API CLIENT(Insominia, PostMen. etc..) e uso a url base: _http://localhost:{numero-da-porta}/_
* A API tem os seguintes END-POINTS:
    + [/hash da url encurtada](#hash)
    + [/encurtar](#login)
    + [/login](#login)
    + [/signin](#signin)
    + [/upload](#upload)
    + [/list](#list)
    + [/delete](#delete)


## <a name="hash"></a>REDIRECIONAMENTO: /hash da url encurtada
* Esse END-POINT é responsável por redirecionar para a URL de destino, utilizando a URL encurtada
* cole no navegado o a URL _http://localhost:{numero-da-porta}/_
* Devolve:
    + (200) - Redireciona
    + (404) - URL não encontrada

## <a name="encurtar"></a>ENCURTAR: /encurtar
* Esse END-POINT é responsável por encurtar uma URL
* use o método _**POST**_
* No BODY envie um JSON:
    + JSON:{
        "linkOrign":"URL  que será encurtada",
        "token":"token de acesso" **Esse token é opcional, você consegue ele no END-POINT:[/login](#login)**
    }
* Devolve:
    + (200) - Devolve a nova URL já encurtada.
    + (401) - Pode devolver esse erro caso aja algum problema com o token, como  já ter expirado o tempo de acesso.**Caso devolva esse erro, tente realizar novamente login no END-POINT:[/login](#login)**


## <a name="login"></a>LOGIN: /login
* Esse END-POINT é responsável por realizar o login.
* use o método _**POST**_
* No BODY envie um JSON:
    + JSON:{
        "email":"email de acesso",
        "senha":"senha de acesso"
    }
* Devolve:
    + (200) - Devolve um token **Guarde esse token para conseguir usar os END-POINTS:[/upload](#upload), [/list](#list) e  [/delete](#delete)**;
    + (400) - Erro no email ou senha;
    + (404) - Acesso não encontrado;

## <a name="signin"></a>CADASTRO/SIGNIN: /signin
* Esse END-POINT é responsável por realizar a criação de um usuário.
* use o método _**POST**_
* No BODY envie um JSON:
    + JSON:{
        "name":"nome do usuário",
        "email":"email de acesso",
        "senha":"senha de acesso"
    }
* Devolve:
    + (200) - Devolve os dados do usuário que foi criado no banco de dados.
    + (400) - Erro no email ou senha
    + (401) - Não autorizado. O usuário já existe.

## <a name="upload"></a>MUDANÇA EM UMA URL JÁ EXISTENTE/UPLOAD: /upload
* Esse END-POINT é responsável por realizar a mudança em uma URL que já foi encurtada.
* use o método _**PATH**_
* No BODY envie um JSON:
    + JSON:{
        "token":"token de acesso",
        "urlId":"ID da URL que será modificada",
        "urlTo":"Nova URL"
    }

* Devolve:
    + (200) - A mudança aconteceu com sucesso.
    + (404) - URL não encontrada.
    + (401) - Pode devolver esse erro caso aja algum problema com o token, como  já ter expirado o tempo de acesso.**Caso devolva esse erro, tente realizar novamente login no END-POINT:[/login](#login)**


## <a name="list"></a>LISTAGEM: /list
* Esse END-POINT é responsável por listar todas as URL's que um usuário encurtou.
* use o método _**GET**_
* No BODY envie um JSON:
     + JSON:{
        "token":"token de acesso"
    }

* Devolve:
    + (200) - Devolve um JSON com todas as URL's que foram encurtadas por esse usuário.
    + (404) - Nenhuma lista de URL's foi encontrada.
    + (401) - Pode devolver esse erro caso aja algum problema com o token, como  já ter expirado o tempo de acesso.**Caso devolva esse erro, tente realizar novamente login no END-POINT:[/login](#login)**
   

## <a name="delete"></a>DELETAR: /delete
* Esse END-POINT é responsável por deletar uma URL que já foi encurtada.
* use o método _**DELETE**_
* No BODY envie um JSON:
 + JSON:{
        "token":"token de acesso",
        "urlId":"ID da URL que será deletada" 
    }

* Devolve:
    + (200) - Deletado com sucesso.
    + (404) - URL não encontrada.
    + (401) - Pode devolver esse erro caso aja algum problema com o token, como  já ter expirado o tempo de acesso.**Caso devolva esse erro, tente realizar novamente login no END-POINT:[/login](#login)**


## Contato

* Autor: [Filipe Amaro Cinque Santana](mailto:filipe.cinque@gmail.com)


## IMPORTANTE:

* **A Aplicação não foi DOCKENIZADA devido a um problema com virtualização na minha máquina, para não impactar o tempo de entrega do teste, opitei por não dockenizar. A aplicação será dockenizada após a entrega do teste!**
