# workshopJest

Projeto de exemplo para práticas de testes com Jest em Node.js, utilizando módulos ES (`type: module`) e integração com Prisma ORM.

## Requisitos

- Node.js 18+

## Instalação

```bash
npm install
```

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



- O projeto usa ES Modules; importe com `import` e use extensões `.js` nos caminhos relativos.
- Para usar o banco, garanta `DATABASE_URL` configurada e o Prisma gerado.


