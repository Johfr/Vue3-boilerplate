# description
A vue3 boilerplate with Typescript, Vue router, Pinia store, Tailwind, SASS, JEST, VTU, Json-server, Autoimports **All inclusive**

# install
pnpm install --save-dev @vue/test-utils
pnpm add --save-dev jest
pnpm i @vue/vue3-jest@28
pnpm install --save-dev babel-core@bridge
pnpm i jest-environment-jsdom
pnpm install --save-dev @babel/preset-env


# init
pnpm install
pnpm run dev

# server
npx json-server --watch 

# jest tests
pnpm test MonComposant.test.js


# babel.config.cjs
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};

# jest.config.cjs
https://github.com/vuejs/vue-jest
créé le fichier suivant et rajouter :
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: { // résout l'erreur vue is not defined
    customExportConditions: ["node", "node-addons"],
 },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  transformIgnorePatterns: ['/node_modules/'],
};

# babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
};

# package.json
rajouter la commane : 
    "test": "jest"

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```
