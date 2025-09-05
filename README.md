# workshopJest

Projeto de exemplo para práticas de testes com Jest em Node.js, utilizando módulos ES (`type: module`) e integração com Prisma ORM.

## Requisitos

- Node.js 18+
- PostgreSQL (para usar Prisma com `DATABASE_URL`)

## Instalação

```bash
npm install
```

## Configuração do Prisma

1. Crie um banco PostgreSQL e defina a variável de ambiente `DATABASE_URL` (arquivo `.env` na raiz):

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/workshop_jest?schema=public"
```

2. Gere o cliente Prisma e aplique as migrações:

```bash
npx prisma generate
npx prisma migrate deploy
```

Observação: o `schema.prisma` modela `Jogador`, `Jogo` e a relação `JogadorJogo`. A migração inicial em `prisma/migrations` cria as tabelas correspondentes.

## Scripts

- Testes: usa Jest com suporte a ES Modules

```bash
npm test
```

O script de teste configurado em `package.json` utiliza:

```json
"test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
```

E o `jest.config.js` aponta para testes dentro de `src/Teste` e convenções padrão:

```js
export default {
  preset: null,
  testEnvironment: 'node',
  transform: {},
  testMatch: [
    '**/src/Teste/**/*.test.js',
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ]
};
```

## Estrutura do Projeto

```
src/
  Entitites/
    jogador.js        # Entidade de domínio Jogador
    jogo.js           # Entidade Jogo (partida entre jogadores)
    ranqueamento.js   # Utilitário para gerar ranking por pontos
    torneio.js        # Agrega jogadores e registra vencedor
  Repository/
    jogadorRepositorio.js  # Persistência com Prisma
  Services/
    jogadorService.js      # Orquestra regras de criação e atualização de pontos
  Teste/
    jogador.test.js        # Testes da entidade Jogador
    jogadorService.test.js # Testes do serviço com mocks
  Validator/
    jogadorValidator.js    # Validação de entrada para Jogador
prisma/
  schema.prisma            # Modelos e datasource
  migrations/              # Migrações SQL geradas pelo Prisma
```

## Domínio implementado

- Entidade `Jogador` (`src/Entitites/jogador.js`)
  - Construtor valida `nome`, `idade`, `time` via `jogadorValidator`.
  - Métodos: `adicionaPontos(pontos)`, `resetPontos()`, getters (`getNome`, `getIdade`, `getTime`, `getPontos`).
  - Bloqueia adição de pontos negativos.

- Entidade `Jogo` (`src/Entitites/jogo.js`)
  - Exige pelo menos 2 jogadores na criação.
  - Define e retorna vencedor (`definirVencedor`, `getVencedor`).

- Utilitário de Ranking (`src/Entitites/ranqueamento.js`)
  - `gerarRanking(jogadores)`: ordena por pontos descendentemente.

- `Torneio` (`src/Entitites/torneio.js`)
  - Registra vencedores e soma pontos (default 3) ao vencedor.
  - Gera ranking dos jogadores cadastrados.

- Validador (`src/Validator/jogadorValidator.js`)
  - Verifica obrigatoriedade e tipos de `nome`, `idade`, `time`.

## Camada de Serviços e Repositório

- `JogadorService` (`src/Services/jogadorService.js`)
  - `criar({ nome, idade, time, pontos })`: instancia `Jogador`, valida e persiste via repositório.
  - `adicionarPontosPersistindo(id, pontos)`: carrega do repositório, atualiza pontos pela entidade e persiste.

- `JogadorRepositorio` (`src/Repository/jogadorRepositorio.js`)
  - Usa `@prisma/client` para `criaJogador`, `buscarPorId` e `atualizaPontos`.

## Banco de Dados (Prisma)

- `schema.prisma` define:
  - `Jogador { id String @id @default(uuid()); nome; idade; time; pontos@default(0) }`
  - `Jogo { id String @id @default(uuid()); createdAt@default(now()) }`
  - `JogadorJogo` para relação N-N, com `pontos` e `vencedor`.
- A primeira migração SQL cria tabelas em `public` com chaves estrangeiras apropriadas.

## Testes

São cobertos dois níveis:

1. Testes de unidade de entidade (`src/Teste/jogador.test.js`):
   - Criação de jogador, adição de pontos, bloqueio de negativos, reset e validação obrigatória.

2. Testes de serviço com mocks (`src/Teste/jogadorService.test.js`):
   - Criação com persistência e atualização de pontos persistida via repositório mockado (Jest).

Execute:

```bash
npm test
```

## Exemplos de uso (rápidos)

Criação e uso de `JogadorService` com repositório real:

```js
import JogadorService from './src/Services/jogadorService.js';
import JogadorRepositorio from './src/Repository/jogadorRepositorio.js';

const service = new JogadorService(new JogadorRepositorio());

const { jogador, persistido } = await service.criar({ nome: 'Yuji', idade: 25, time: 'Time A' });
await service.adicionarPontosPersistindo(persistido.id, 10);
```

## Notas

- O projeto usa ES Modules; importe com `import` e use extensões `.js` nos caminhos relativos.
- Para usar o banco, garanta `DATABASE_URL` configurada e o Prisma gerado.


