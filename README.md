## Greek Heroes
The selection of technologies to do this project was, at the very least, bold. I don't have any experience with any of those.
I wanted to prove that I can learn fast if needed, and be pragmatic enough to make it work.
It was a good opportunity to also have hands on experience with technologies my teams are currently working on: ReactJS, Typescript, Cypress.

This project was bootstrapped with Create React App, for Typescript.
I've followed and ATDD / and TDD approach, started with single acceptance tests, that guided me to build the initial ReactJS component, make it work and refactor continuously my project. 

I've been also playing around with Github Actions, so implemented a CI/CD process for the project using it (see the workflow [here](https://github.com/rodrigojmartin/greek-heroes/blob/master/.github/workflows/main.yml). The build and test of the project is triggered for every push, and the deploy step (to Github Pages) is triggered only after succesful checks in the master branch.

### Possible improvements
* Add Cypress Dashboard for better reporting
* Run Fuzzy tests
* Add Performance/Stress Tests
* Run a Linter check in the CICD workflow
* Refactor/Fix the main convertMoney algorithm to cover missing functionality such as:
  * Not handling strings that start with a number correctly: '100fsefwefwef' would return '100.00'
* Add a LITTLE css at the very least

You can see the deployed app here: http://rodrigojmartin.github.io/greek-heroes 

### Fuzz Test
Tried making [Sinkdweller](https://github.com/rarecoil/sinkdweller) work, but in the end it didn't executed in Cypress scope (Javascript architecture). The idea was to mutate the big nasty list of strings and dinamycally create tests for it, which would be executed on demand.

One possible solution or enhancement would be to create an executable for Sinkdweller in Typescript and execute it with ts-node.

### Performance/Load Tests
The idea was to test [K6](https://k6.io/) for doing this, but didn't have enough time :(
Other idea was to get the cypress network operation information and perform basic assertions on it.


### Pre requisites
* npm >= 6
* Node >= 10
* yarn >= 1.2

### Commands
Locally in the project directory, you can run:

### `yarn install`
Installs the project dependencies

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn jest`
Runs the unit tests

### `yarn run cypress run`

Executes integration and component tests using the Electron browser<br />

* Integration Tests: greek-heroes-cy.spec.ts<br />
* Component Tests: NumberConverterForm.cy-spec.ts<br />