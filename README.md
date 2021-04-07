## Description

Tutorial project.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Notes

- PostgresSQL version is on `main` branch.
- To generate migration:

  1. create `ormconfig.js` file
  2. build the project
  3. run `npx typeorm migration:generate -n [migration_name]`
