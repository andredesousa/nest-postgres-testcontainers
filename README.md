# NestJS PostgreSQL Testcontainers

[Nest](https://github.com/nestjs/nest) is a progressive [Node.js](http://nodejs.org) framework for building efficient and scalable server-side applications.
This project was generated with [Nest CLI](https://github.com/nestjs/nest-cli) version 8 and [Node.js](https://nodejs.org/en/about/releases) version 14.
It has a complete development environment configured, including build, test, and deploy scripts as examples.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs the application.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to source code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests in watch mode.
- `e2e` - Runs the e2e tests.
- `e2e:watch` - Runs the e2e tests in watch mode.
- `build` - Builds the dist files.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Development server

In Nest, everything is organized in modules, and every application have at least one of them, the `app` root module.
The `app` module is the entry point of the application and is the module that Nest uses to bootstrap the application.

Use `npm run start` for a dev server. Navigate to <http://localhost:3000/>.
The application will automatically reload if you change any of the source files.

This project uses a [PostgreSQL](https://www.postgresql.org/) database and [Sequelize](https://sequelize.org/), a popular Object Relational Mapper (ORM).
In local development, you need to provide a connection to a PostgreSQL instance.

You can use the following docker command:

```bash
docker run -d -p 5432:5432 -e POSTGRES_DB=nest -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret postgres
```

This application includes [Swagger](https://swagger.io/).
It is available at [http://localhost:3000/api](http://localhost:3000/api).

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) help maintain the code quality.

Use `npm run lint` to analyze your code.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save

## Running unit tests

Unit tests are responsible for testing of individual methods or classes by supplying input and making sure the output is as expected.

Use `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](reports/coverage/lcov-report/index.html) file in your web browser.

## Running end-to-end tests

The end-to-end testing covers the interaction of modules at a more aggregate level, closer to the kind of interaction that end-users will have with the production system.

Use `npm run e2e` to execute the end-to-end tests via [Jest](https://jestjs.io/), [SuperTest](https://github.com/visionmedia/supertest) and [Testcontainers](https://www.testcontainers.org/).
Use `npm run e2e:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](reports/e2e/index.html) file in your web browser.

## Debugging

You can debug the code, add breakpoints, inspect variables and view the application's call stack.
Also, you can use the IDE for debugging unit and end-to-end tests.
These functionalities are provided natively or based on plugins.
You can debug tests in chrome inspector with `debugger` keyword if you run `npm run test:debug` or `npm run e2e:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.

## Build

Use `npm run build` to build the project. The build artifacts will be stored in the `dist` directory.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers.
If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
