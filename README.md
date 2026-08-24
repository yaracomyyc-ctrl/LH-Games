# LH Games - Loja de Jogos em Angular

Projeto desenvolvido para a atividade **Implementação da Tela Inicial do site da loja de Jogos no Angular**, do curso Full Stack do SENAI.

A aplicação apresenta uma loja virtual simples, com página inicial, produtos em promoção, formulário de login, menu, rodapé e navegação por rotas.

## Tecnologias utilizadas

- Angular 15
- TypeScript
- Angular Material
- Bootstrap 5
- HTML e CSS

## Funcionalidades da atividade

- Menu reutilizável com links para Início e Login.
- Carrossel de banners feito com Bootstrap.
- Cards de produtos feitos com Angular Material.
- Produtos criados a partir de uma classe TypeScript.
- Repetição dos cards evitada com `*ngFor`.
- Formulário com os campos usuário e senha.
- Rotas `/inicio` e `/login`.
- Rodapé reutilizável.
- Layout adaptado para computador, tablet e celular.

> O login e a compra são apenas demonstrações de Front-End. Não existe API ou banco de dados nesta etapa.

## Como executar

### Pré-requisitos

Instale:

- [Node.js 18 LTS](https://nodejs.org/) (versão compatível com o Angular 15 deste projeto)
- Angular CLI 15: `npm install -g @angular/cli@15` (opcional para usar comandos `ng` diretamente)
- Git, caso deseje publicar o projeto no GitHub

### Passos

1. Abra a pasta `loja-games` no VS Code.
2. Abra o terminal na pasta do projeto.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

5. Acesse `http://localhost:4200` no navegador.

## Rotas

| Endereço | Componente | Conteúdo |
| --- | --- | --- |
| `/inicio` | `InicioComponent` | Banners e jogos em promoção |
| `/login` | `LoginComponent` | Formulário de usuário e senha |
| `/` | Redirecionamento | Envia o usuário para `/inicio` |

## Estrutura principal

```text
src/app/
├── inicio/            # Página inicial e produtos
├── login/             # Formulário de login
├── menu/              # Barra de navegação
├── models/jogo.ts     # Classe que representa um jogo
├── rodape/            # Rodapé do site
├── app-routing.module.ts
└── app.module.ts
```

## Gerar a versão de produção

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/loja-games`.

## Documentação

Consulte [DOCUMENTACAO.md](DOCUMENTACAO.md) para entender os componentes, a classe TypeScript, os métodos e o processo de publicação no GitHub.

## Autora

Yara Costato - Projeto educacional SENAI.
