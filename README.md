# SapientInterview

View the project at [`https://amrishkhan05.github.io/SpaceXDataView/`](https://amrishkhan05.github.io/SpaceXDataView/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

Also I have changed the following in angular.json for hosting it using github pages

"outputPath": "dist/SapientInterview/browser" ==> "outputPath": "dist/"


## Running unit tests

I have written unit tests covering all the scenarios for the functions in the app

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Server Side Rendering 

Included the basic Server-side rendering (SSR) with Angular Universal

use the following commands:

    "npm run dev:ssr": "ng run SapientInterview:serve-ssr",
    "npm run serve:ssr": "node dist/SapientInterview/server/main.js",
    "npm run build:ssr": "ng build --prod && ng run SapientInterview:server:production",
    "npm run prerender": "ng run SapientInterview:prerender

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng build --prod --base-href https://githubusername.github.io/SpaceXDataView/` to host the app in githubpages

