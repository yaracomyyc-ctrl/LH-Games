# Documentação do sistema - LH Games

## 1. Objetivo

O objetivo deste projeto é recriar o Front-End de uma loja de jogos utilizando Angular. A aplicação foi dividida em componentes para evitar repetição de código e facilitar futuras alterações ou integrações com um Back-End.

## 2. Como utilizar o site

Ao abrir o endereço `http://localhost:4200`, o Angular redireciona para a página inicial.

Na página **Produtos**, o usuário encontra:

- um carrossel com três banners;
- três jogos em promoção;
- nome, descrição e preço de cada jogo;
- botão **Comprar**, que demonstra a seleção do produto.

Ao clicar em **Login**, o usuário acessa um formulário com:

- campo de usuário, no formato de e-mail;
- campo de senha;
- botão **Entrar**.

O botão fica desabilitado enquanto algum campo obrigatório estiver vazio. Nesta etapa, o formulário não autentica o usuário em um servidor; ele apenas exibe uma mensagem de confirmação.

## 3. Componentes do Angular

### AppComponent

É o componente principal. Seu HTML reúne os elementos que aparecem em todas as páginas:

```html
<app-menu></app-menu>
<router-outlet></router-outlet>
<app-rodape></app-rodape>
```

O `router-outlet` mostra o componente correspondente à rota atual.

### MenuComponent

Utiliza `mat-toolbar` e `mat-icon` do Angular Material. Os links usam `routerLink`, evitando o recarregamento completo da página.

### InicioComponent

Contém o carrossel do Bootstrap e os cards do Angular Material. Os jogos ficam em um vetor TypeScript e o `*ngFor` cria um card para cada item.

### LoginComponent

Utiliza `mat-form-field`, `matInput`, ícones e botão do Angular Material. O `FormsModule` permite ligar os campos às propriedades `usuario` e `senha` por meio do `[(ngModel)]`.

### RodapeComponent

É um componente simples e reutilizável que mostra a autoria do projeto.

## 4. Rotas

As rotas ficam em `src/app/app-routing.module.ts`:

```typescript
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];
```

A rota `**` impede que o usuário permaneça em uma página inexistente.

## 5. TypeScript utilizado no projeto

### Diferença entre JavaScript e TypeScript

JavaScript executa diretamente no navegador e permite variáveis sem tipo definido. TypeScript acrescenta tipagem e recursos de orientação a objetos. Antes da aplicação rodar, o código TypeScript é convertido para JavaScript.

Exemplo de uma variável tipada:

```typescript
preco: number = 300;
```

### Classe e objeto

A classe `Jogo` funciona como um modelo:

```typescript
export class Jogo {
  constructor(
    public nome: string,
    public descricao: string,
    public preco: number,
    public imagem: string
  ) {}
}
```

Um objeto é criado com `new`:

```typescript
new Jogo('Neon Challenge', 'Descrição do jogo', 300, 'assets/img/jogo1.PNG');
```

### Construtor

O `constructor` é chamado quando o objeto ou componente é criado. No `InicioComponent`, ele preenche a lista inicial de jogos.

### Método

Um método representa uma ação da classe. O método `comprar` recebe um jogo e mostra qual produto foi selecionado:

```typescript
comprar(jogo: Jogo): void {
  alert(`${jogo.nome} foi selecionado!`);
}
```

O tipo `void` informa que o método não devolve um valor.

## 6. Angular Material e Bootstrap

Os módulos do Angular Material são importados no `AppModule`. O Bootstrap foi configurado no arquivo `angular.json`.

Componentes utilizados:

- `MatToolbarModule`: menu;
- `MatCardModule`: produtos;
- `MatFormFieldModule` e `MatInputModule`: formulário;
- `MatButtonModule`: botões;
- `MatIconModule`: ícones;
- Bootstrap Carousel: banners;
- Bootstrap Grid: organização responsiva dos cards.

## 7. Instalação

Use preferencialmente o Node.js 18 LTS, que é compatível com o Angular 15 deste projeto. No terminal, dentro da pasta do projeto:

```bash
npm install
npm start
```

Depois, abra `http://localhost:4200`.

Para interromper o servidor, pressione `Ctrl + C` no terminal.

## 8. Publicação no GitHub

Crie um repositório vazio no GitHub. Em seguida, execute na pasta do projeto:

```bash
git init
git add .
git commit -m "Projeto da loja de jogos em Angular"
git branch -M main
git remote add origin COLE_AQUI_A_URL_DO_REPOSITORIO
git push -u origin main
```

Não envie a pasta `node_modules`; ela já está indicada no arquivo `.gitignore` e será recriada com `npm install`.

## 9. Checklist de conferência

Antes da entrega no AVA, confira no navegador:

- [ ] A página inicial abre pela rota padrão.
- [ ] Os botões do carrossel mudam os banners.
- [ ] Os três produtos são exibidos.
- [ ] O menu navega entre Início e Login.
- [ ] O formulário exige usuário e senha.
- [ ] O rodapé aparece nas duas páginas.
- [ ] O layout se adapta a telas menores.
- [x] O comando `npm run build` gera a versão de produção sem erro.

## 10. Próximas melhorias

Em uma etapa futura, o projeto poderá consumir uma API para carregar produtos, autenticar usuários e registrar compras em um banco de dados.
