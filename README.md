# LH Games - Angular com consumo de API

Projeto desenvolvido para as atividades de Angular do curso Full Stack do SENAI.

Nesta segunda etapa, a loja passou a consumir uma API REST simulada com JSON Server. O painel lista os produtos da API e permite cadastrar, editar e excluir jogos.

## Tecnologias

- Angular 15 e TypeScript
- Angular Material
- Bootstrap 5
- HttpClient
- JSON Server 0.17.4

## Funcionalidades

- Listagem de produtos consumida com uma requisição `GET`.
- Cadastro de produto com `POST`.
- Consulta de um produto para edição com `GET /:id`.
- Atualização de produto com `PUT`.
- Exclusão de produto com `DELETE`.
- Mensagens de carregamento e erro.
- Formulário com validação de campos obrigatórios.
- Navegação entre painel, cadastro, vitrine e login.
- Layout responsivo com Bootstrap.

As páginas de vitrine e login da Atividade 1 foram mantidas para mostrar a evolução do projeto.

## Como executar

### Pré-requisitos

- [Node.js 18 LTS](https://nodejs.org/)
- npm

### Instalação

Abra um terminal na pasta do projeto e execute:

```bash
npm install
```

### 1. Iniciar a API

No primeiro terminal:

```bash
npm run api
```

A API estará disponível em `http://localhost:3000/produtos`.

### 2. Iniciar o Angular

Sem fechar a API, abra um segundo terminal na mesma pasta:

```bash
npm start
```

Acesse `http://localhost:4200` no navegador.

## Rotas

| Endereço | Função |
| --- | --- |
| `/painel-principal` | Lista os produtos da API |
| `/cadastro-produto` | Cadastra um produto |
| `/cadastro-produto/:id` | Edita o produto selecionado |
| `/inicio` | Vitrine criada na Atividade 1 |
| `/login` | Login demonstrativo da Atividade 1 |

## Estrutura principal

```text
loja-games/
├── db.json
├── src/app/
│   ├── componentes/
│   │   ├── cadastro-produto/
│   │   └── painel-principal/
│   ├── models/produto.ts
│   ├── servicos/produto.service.ts
│   ├── inicio/
│   ├── login/
│   ├── menu/
│   └── rodape/
├── DOCUMENTACAO.md
└── package.json
```

## Build de produção

```bash
npm run build
```

Os arquivos são gerados em `dist/loja-games`.

## Documentação

Consulte [DOCUMENTACAO.md](DOCUMENTACAO.md) para entender o JSON Server, o service, os componentes e o passo a passo de utilização.

## Autora

Yara Costato - Projeto educacional SENAI.
