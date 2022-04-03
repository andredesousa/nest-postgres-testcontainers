# NestJS PostgreSQL Testcontainers

[Nest](https://github.com/nestjs/nest) is a progressive [Node.js](http://nodejs.org) framework for building efficient and scalable server-side applications.
This project was generated with [Nest CLI](https://github.com/nestjs/nest-cli) version 8 and [Node.js](https://nodejs.org/en/about/releases) version 14.
It has a complete development environment configured, including build, test, and deploy scripts as examples.

## Overview

When working in a large team with many developers that are responsible for the same codebase, having a common understanding of how the application should be structured is vital.
All of the app's code goes in a folder named `src`. The end-to-end tests are in the `e2e` folder.
In Nest, everything is organized in modules, and every application have at least one of them, the `app` root module.
The `app` module is the entry point of the application and is the module that Nest uses to bootstrap the application.
Static files are placed in `assets` folder.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.
There are commands to start the application, code linting and formatting, to run unit tests, to run e2e tests, to build, and others.
All the commands should be executed in a console inside the root directory.

## Development mode

Use `npm run start` to run the app in the development mode.
This app includes [Swagger](https://swagger.io/). It is available at [http://localhost:3000/api](http://localhost:3000/api).

## Data persistence

This project uses a [PostgreSQL](https://www.postgresql.org/) database.
In local development, you need to provide a connection to a PostgreSQL instance. You can use the next example:

```bash
docker run -d -p 5432:5432 -e POSTGRES_DB=nest -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret postgres
```

The project uses [Sequelize](https://sequelize.org/) a popular Object Relational Mapper (ORM) written in a vanilla JavaScript.

## Linting and formatting code

Use `npm run lint` to analyze your code. It includes, `ESLint` and `Prettier`.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while we type or on-save.
To ensure all files committed to git don't have any TypeScript, linting, or formatting errors, there is a tool called [lint-staged](https://www.npmjs.com/package/lint-staged) that can be used.
When lint-staged is used in combination with [husky](https://www.npmjs.com/package/husky), the linting commands specified with lint-staged can be executed to staged files on pre-commit.

## Running unit tests

Use `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.
You can see the HTML coverage report opening the [index.html](reports/coverage/lcov-report/index.html) file in your web browser.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

## Running end-to-end tests

Use `npm run e2e` to execute the end-to-end tests via [Jest](https://jestjs.io/) and [SuperTest](https://github.com/visionmedia/supertest).
Use `npm run e2e:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](reports/e2e/index.html) file in your web browser.

## Debugging

You can debug the code, add breakpoints, inspect variables and view the application's call stack.
Also, you can use the IDE for debugging unit and end-to-end tests.
These functionalities are provided natively or based on plugins.
You can debug tests in chrome inspector with `debugger` keyword if you run `npm run test:debug` or `npm run e2e:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.

## Build and deployment

Run `npm run build` to build the project. The build artifacts will be stored in the `dist` directory.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers.
If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
