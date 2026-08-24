# Documentação do sistema - LH Games

## 1. Objetivo da Atividade 2

O objetivo desta etapa é integrar o Front-End Angular a uma API REST. A aplicação usa o JSON Server para simular um Back-End e armazenar os produtos no arquivo `db.json`.

O painel principal busca a lista de produtos na API. A tela de cadastro envia novos produtos e também é usada para editar um item existente. O usuário ainda pode excluir produtos.

## 2. Como iniciar o sistema

Use o Node.js 18 LTS. No terminal, entre na pasta `loja-games` e instale as dependências:

```bash
npm install
```

O sistema precisa de dois servidores funcionando ao mesmo tempo.

### Terminal 1: API

```bash
npm run api
```

Endereços importantes:

- API: `http://localhost:3000`
- Produtos: `http://localhost:3000/produtos`

### Terminal 2: Angular

```bash
npm start
```

Abra `http://localhost:4200`. A rota inicial redirecionará para o painel de produtos.

## 3. Como utilizar

### Listar produtos

Clique em **Painel**. A tabela mostra ID, imagem, produto, descrição, preço e ações. Esses dados não estão escritos diretamente no HTML: eles são recebidos da API.

### Cadastrar produto

1. Clique em **Cadastrar** ou em **Cadastrar produto**.
2. Digite nome, descrição, arquivo da foto e preço.
3. As fotos disponíveis inicialmente são `jogo1.PNG`, `jogo2.PNG` e `jogo3.PNG`.
4. Clique em **Salvar produto**.
5. Depois do cadastro, o sistema volta ao painel.

### Editar produto

1. No painel, clique em **Editar**.
2. O Angular usa o ID da rota para buscar o produto.
3. Altere os campos e clique em **Salvar produto**.

### Excluir produto

Clique em **Excluir** e confirme a pergunta exibida pelo navegador. A aplicação solicita a exclusão à API e recarrega a tabela.

## 4. O que é uma API REST

Uma API permite que sistemas diferentes troquem informações. Neste projeto, o Angular é o cliente e o JSON Server simula o servidor.

| Método HTTP | Endereço | Ação no projeto |
| --- | --- | --- |
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca um produto |
| `POST` | `/produtos` | Cadastra um produto |
| `PUT` | `/produtos/:id` | Atualiza um produto |
| `DELETE` | `/produtos/:id` | Exclui um produto |

## 5. Banco de dados simulado

O arquivo `db.json` contém um vetor chamado `produtos`:

```json
{
  "produtos": [
    {
      "id": 1,
      "produto": "Neon Challenge",
      "descricao": "Supere pistas futuristas...",
      "foto": "jogo1.PNG",
      "preco": 300
    }
  ]
}
```

Quando um cadastro, uma edição ou uma exclusão é feita, o JSON Server altera esse arquivo.

## 6. Modelo TypeScript

O arquivo `src/app/models/produto.ts` define quais campos um produto deve ter:

```typescript
export interface Produto {
  id?: number;
  produto: string;
  descricao: string;
  foto: string;
  preco: number | null;
}
```

O `id` é opcional porque, durante um novo cadastro, ele ainda será criado pelo JSON Server. A tipagem ajuda a encontrar erros enquanto o código está sendo desenvolvido.

## 7. ProdutoService

O arquivo `src/app/servicos/produto.service.ts` concentra o acesso ao Back-End. Isso evita repetir endereços e chamadas HTTP nos componentes.

O construtor recebe o `HttpClient` por injeção de dependência:

```typescript
constructor(private http: HttpClient) {}
```

Principais métodos:

- `listarProdutos()`: faz GET da lista;
- `buscarProdutoPorId(id)`: faz GET de um produto;
- `cadastrarProduto(produto)`: faz POST;
- `atualizarProduto(id, produto)`: faz PUT;
- `excluirProduto(id)`: faz DELETE.

Cada método retorna um `Observable`. O componente usa `subscribe` para tratar a resposta da API ou um possível erro.

## 8. Componentes

### PainelPrincipalComponent

Ao iniciar, chama `carregarProdutos()`. O HTML utiliza `*ngFor` para criar uma linha para cada produto recebido. Os métodos de edição e exclusão respondem aos botões da tabela.

### CadastroProdutoComponent

Usa um formulário com `[(ngModel)]`. Quando existe um ID na rota, carrega o produto e entra no modo de edição. Sem ID, realiza um novo cadastro.

### MenuComponent e RodapeComponent

São reutilizados em todas as páginas. O menu foi feito com Bootstrap e possui links do Angular Router.

### Componentes da Atividade 1

`InicioComponent` e `LoginComponent` continuam disponíveis nas rotas `/inicio` e `/login`.

## 9. Rotas

```typescript
const routes: Routes = [
  { path: 'painel-principal', component: PainelPrincipalComponent },
  { path: 'cadastro-produto', component: CadastroProdutoComponent },
  { path: 'cadastro-produto/:id', component: CadastroProdutoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' },
  { path: '**', redirectTo: '/painel-principal' }
];
```

## 10. Possíveis erros

### A mensagem diz que não foi possível carregar

Confira se o comando `npm run api` está funcionando no primeiro terminal e se `http://localhost:3000/produtos` abre no navegador.

### A porta 3000 já está em uso

Feche o programa que está usando essa porta e execute novamente `npm run api`.

### A imagem não aparece

Confira se o nome digitado é igual ao arquivo dentro de `src/assets/img`. Em alguns sistemas, letras maiúsculas e minúsculas fazem diferença.

### O comando ng não é encontrado

Use `npm start` e `npm run build`, pois esses comandos utilizam a versão local do Angular CLI.

## 11. Checklist da entrega

- [x] Bootstrap instalado e configurado.
- [x] Angular Material instalado e configurado.
- [x] JSON Server configurado.
- [x] Arquivo `db.json` com produtos.
- [x] `HttpClientModule` importado.
- [x] Service com GET, POST, PUT e DELETE.
- [x] Painel consumindo a lista da API.
- [x] Tela de cadastro de produto.
- [x] Edição e exclusão implementadas.
- [x] Formulário validado.
- [x] Build de produção executado sem erros.
- [x] API testada nas quatro operações.

## 12. Publicação

O repositório deve permanecer público para que o tutor consiga acessar o código pelo link enviado no AVA. A pasta `node_modules` não deve ser publicada, pois é recriada pelo comando `npm install`.
