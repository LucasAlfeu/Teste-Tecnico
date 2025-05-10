# Relatório Teste Técnico

## Introdução

Antes de tudo gostaria de agradecer a oportunidade de participar o do teste.
Nesse documento conterá como sucedeu a tomada de desisão para criar, de maneira coesa, o teste.

## Principais Componentes

O principais componentes utilizados no app foram:

- Card
- Imagem 
- Titulo
- Formulario de Busca
- Home
- Cadastrar Noticia
- Detalhes


#### 1 Card

Criado para conter os componentes necessários como a imagem, o titulo, o parágrafo e o link de saiba mais. Esse componente que recebe os dados da API e com uma estrutura de repetição renderiza todos as notícias.

#### 2 Imagem

Para adicionar dinamicamente a imagem do card criei esse componente para receber o src vindo da API.

#### 3 Titulo

Esse componente eu armazenei a estrutura do cabeçalho das páginas.

#### 4 Formulário de Busca

Contem a estrutura de formulário para buscar as notícias, entretanto ele não filtra as notícias.

#### 5 Home

Possui a estrutura necessária, tanto HTML quanto outros componentes, para a página inicial.

#### 6 Cadastrar Notícia

Contem a estrutura HTML necessária para coletar os dados para a criação de uma notícia.

#### 7 Detalhes

Esse componente mostra os detalhes de cada notícia.


## Principais Services

Services criados para a aplicação:

- API-Noticias

#### 1 API-Noticias

Esse service foi criado para armazenar os códigos necessários para consumir a API e seus métodos são:

- getItems: busca os dados da API
- getItemById: busca uma notícia utilizando o ID dela, com isso possui um número inteiro como parâmetro
- createItem: envia dados para a API, esse método é utilizado para cadastrar uma notícia


## Páginas

Para a elaboração das páginas que a aplicação necessitava eu utilizei os seguintes componentes:

- Home
- Detalhes
- Cadastrar Noticia


#### 1 Home

A página Inicial possui o componente título para renderizar uma pequena navegação entre as páginas de 
Inicio e Cadastrar Notícia o que facilita a ida para diferentes lugares do site.

Também possui os Cards de notícia que são renderizados de ordem decrescente segundo o id da notícia, 
isso garante que as notícias mais novas apareçam mais ao topo da página. Como são muitas notócias já 
cadastradas eu criei um scroll na vertical para o componente HTML que possui a lista de cards o que garante que
o componente de titulo e o componente de formulário sempre fiquem em seu lugar.

O formulário de busca ele não funciona entretanto para dispositivos mobile eu criei um botão hamburguer para
renderizar ele e não ficar ocupando boa parte da tela já que é meno quando se comparada com um monitor.


#### 2 Detalhes

A página de detalhes é acessada clicando no link de "Saiba Mais" em cada card que é redirecionado para a página.
Passei como parâmetro na URL o id de cada notícia e fiz uma busca na API pelo objeto referente ao id e 
renderizei todos os dados mais relevantes como imagem, título e corpo da notícia.


#### 3 Cadastrar Notícia

A página de cadastrar uma nova notícia é bem simples e não possui muitos elementos, somente o formulário com a 
função que enviar os dados via API. Esse formulário possui algumas verificação para saber se todos os campos estão preenchidos
e após o cadastramento da notícia a aplicação te redireciona para a página inicial.


## Conclusão

Novamente agradeço a oportunidade, tentei ser o mais fiel possível ao layout que foi proposto e espero que 
o resultado tenha sido satisfatório e que eu tenha cumprido todos os requisitos necessário.

## Autor

Lucas Alfeu da Silva Oliveira
