## Greek Heroes
The selection of technologies to do this project was, at the very least, bold. I don't have any experience with any of those.
I wanted to prove that I can learn fast if needed, and be pragmatic enough to make it work.
It was a good opportunity to also have hands on experience with technologies my teams are currently working on: ReactJS, Typescript, Cypress.

This project was bootstrapped with Create React App, for Typescript.
I've followed and ATDD / and TDD approach, started with single acceptance tests, that guided me to build the initial ReactJS component, make it work and refactor continuously my project. 

I've been also playing around with Github Actions, so implemented a CI/CD process for the project using it (see .github/workflows). The build and test of the project is triggered for every push, and the deploy step (to Github Pages) is triggered only after succesful checks in the master branch.

You can see the deployed app here: http://rodrigojmartin.github.io/greek-heroes 

### Fuzz Test
Tried making [Sinkdweller](https://github.com/rarecoil/sinkdweller) work well, but in the end it didn't executed in the Javascript architecture. The idea was to mutate the big nasty list of strings and dinamycally create tests for it, which would be executed on demand.

### Performance/Load Tests
The idea was to test [K6](https://k6.io/) for doing this, but didn't have enough time to integrate it.


### Pre requisites
* npm >= 6
* Node >= 10
* yarn >= 1.2

### Commands
In the project directory, you can run:

### `yarn install`
Installs the project dependencies

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `./node_modules/.bin/cypress run`

Executes integration and component tests using the Electron browser<br />

* Integration Tests: greek-heroes-cy.spec.ts<br />
* Component Tests: NumberConverterForm.cy-spec.ts<br />