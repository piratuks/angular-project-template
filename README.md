# Template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0. <br />
This is preferred empty project template which contains:

- Preferred lint rules which are implemented with https://github.com/piratuks/code-style-config
- Prettier integration.
- Husky and Lint-staged integration.
- Translation module ready for further explotation.
- Some other basic modules for my preferred usage (which can easily be removed or changed).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Lint commands

Run `ng lint` to check typescript errors.

Run `ng lint --fix` to auto fix typescript errors if possible.

Precommit actually checks for lint issues.

Formatting issues can be fixed with https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode.

Visual studio code configuration is under .vscode and it will work only if .vscode is under workspace root. So you need to open project root folder in order for .vscode to work

Webstorm follow the https://prettier.io/docs/en/webstorm.html

Comments should be as follows:

- Description
-
- @param param1 - Description.
- @param param2 - Description.
- @param param3 - Description.
- @returns val - Description.

### General

Development - Applications FE side is under `src/` which is attached to the angular
Production - Applications FE side is under `dist/` which is attached to the angular <br /><br />

`.vscode` - Development formating data for visual code <br />
`e2e` - Development test cases <br />

### Requirements

@angular-devkit/architect 0.803.26 <br />
@angular-devkit/build-angular 0.803.26 <br />
@angular-devkit/build-optimizer 0.803.26 <br />
@angular-devkit/build-webpack 0.803.26 <br />
@angular-devkit/core 8.3.26<br />
@angular-devkit/schematics 8.3.26<br />
@angular/cli 8.3.26<br />
@ngtools/webpack 8.3.26<br />
@schematics/angular 8.3.26<br />
@schematics/update 0.803.26<br />
rxjs 6.5.5<br />
typescript 3.5.3<br />
webpack 4.39.2<br />
Node version must be 10, 11, 12, 13<br />
