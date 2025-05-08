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
- Formulario para Cadastrar uma Notícia
- Home
- Cadastrar Noticia


#### Card

Criado para conter os componentes necessários como a imagem, o titulo, o parágrafo e o link de saiba mais. Esse componente que recebe os dados da API e com uma estrutura de repetição renderiza todos as notícias.

#### Imagem

Para adicionar dinamicamente a imagem do card criei esse componente para receber o src vindo da API.

#### Titulo

Esse componente eu armazenei a estrutura do cabeçalho das páginas.

#### Formulário de Busca

Contem a estrutura de formulário para buscar as notícias, entretanto ele não filtra as notícias.

#### Formulário para Cadastrar uma Notícia

Contem a estrutura HTML necessária para coletar os dados para a criação de uma notícia.


## Principais Services

Services criados para a aplicação:

- API-Noticias

#### API-Noticias

Esse service foi criado para armazenar os códigos necessários para consumir a API e seus métodos são:

1. getItems: busca os dados da API
2. getItemId: busca uma notícia utilizando o ID dela, com isso possui um número inteiro como parâmetro
3. postItem: envia dados para a API, esse método é utilizado para cadastrar uma notícia