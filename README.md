# Lacrei-Saude

Aplicação de página única, para desafio Front-end da Lacrei Saúde. O site desenvolvido representa o home page de uma página de saúde.

## Tecnologias Utilizadas

- **TypeScript**: Superset da linguagem de programação JavaScript utilizada para desenvolver o projeto, permitindo tipagens.
- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **NPM**: Gerenciador de pacotes para o Node.js, utilizado para gerenciar e instalar quaisquer dependências do projeto.
- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled-components**: Biblioteca utilizada para estilização.
- **React-Router-DOM**: Biblioteca para aplicação React ter multiplas páginas.
- **React Testing Library**: Biblioteca para realizar testes em aplicação React.

## Estrutura do Projeto

Os arquivos da aplicação estão dento da pasta `/app`, a qual possui uma estrutura de pastas padrão para um projeto React.ts, da seguinte forma:

- `coverage/`: Esta pasta contém arquivos relacionados as configurações do cobrimento dos testes.
- `package.json`: Este arquivo contém a lista de dependências do projeto e scripts NPM.
- `src/`: Esta pasta contém todo o código fonte do projeto.
- `src/App.tsx`: Este arquivo contém a implementação das rotas.
- `src/App.test.tsx`: Este arquivo contém a implementação dos testes de toda a aplicação.
- `src/assets`: Essa pasta contém arquivos auxiliares.
- `src/components`: Essa pasta contem os arquivos .tsx de cada componentes e os arquivos '**Styles.ts' com as classes estilizadas.
- `src/pages`: Essa pasta contem os arquivos .tsx de cada rota da aplicação.

## Como Executar o Projeto

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório para o seu computador.
2. Navegue até a pasta do projeto, depois para pasta app e execute `npm install` para instalar as dependências.
3. Execute `npm run dev` para abrir a página no navegador.
4. Execute `npm run test` para aplicar os testes.

## Deploy

A aplicação está com deploy realizado no Vercel. Sendo acessível no link 'https://lacrei-saude.vercel.app/'

## Contribuindo

Este repositório tem intuito de ser avaliado no desafio, portanto, pull requests não serão aceitos.