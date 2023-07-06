# Projeto Auth-Front com Angular utilizando JWT

Este é um projeto de front-end desenvolvido em Angular que implementa um sistema de autenticação usando JSON Web Tokens (JWT).

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js: https://nodejs.org
- Angular CLI: Execute `npm install -g @angular/cli` para instalar o Angular CLI globalmente.

## Configuração do Projeto

Siga as etapas abaixo para configurar o projeto em sua máquina local:

1. Clone o repositório do projeto:

   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Acesse o diretório do projeto:

   ```
   cd auth-front
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

4. Configure as informações de autenticação:

   - Abra o arquivo `src/environments/environment.ts`.
   - Preencha a propriedade `apiUrl` com a URL da API de autenticação.

## Executando o Projeto

Para executar o projeto localmente, siga as etapas abaixo:

1. No diretório do projeto, execute o seguinte comando:

   ```
   ng serve
   ```

2. Abra seu navegador e acesse `http://localhost:4200` para visualizar o projeto em execução.

## Funcionalidades

O projeto Auth-Front com Angular oferece as seguintes funcionalidades:

- Registro de usuário: permite que novos usuários se registrem fornecendo um nome de usuário e senha.
- Login de usuário: permite que os usuários existentes façam login usando suas credenciais.
- Autenticação com JWT: após o login bem-sucedido, o sistema gera um token JWT que é armazenado no armazenamento local do navegador. O token é enviado com todas as solicitações subsequentes para autenticação do usuário.
- Proteção de rotas: certas rotas são protegidas e só podem ser acessadas por usuários autenticados. Se um usuário não autenticado tentar acessar uma rota protegida, ele será redirecionado para a página de login.

## Contribuindo

Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch:

   ```
   git checkout -b minha-nova-feature
   ```

3. Faça suas modificações e adicione seus commits:

   ```
   git commit -m "Minha nova feature"
   ```

4. Envie suas alterações para o repositório remoto:

   ```
   git push origin minha-nova-feature
   ```

5. Abra um pull request no repositório original.

## Considerações Finais

Este projeto é um exemplo básico de implementação de autenticação usando JWT no front-end com Angular. Sinta-se à vontade para explorar o código-fonte e personalizá-lo de acordo com suas necessidades.

Se você tiver alguma dúvida ou problema, sinta-se à vontade para abrir uma issue no repositório. Esperamos que este projeto seja útil para você e facilite o desenvolvimento de sistemas de autenticação com Angular e JWT.
