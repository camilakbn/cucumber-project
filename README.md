Installing and configuring Cypress Cucumber Preprocessor:

You need to have Node.js and npm (Node Package Manager) installed on your computer.

- Create a folder with a name you want for your project;
- Open the terminal on your folder, then type "npm init -y", and follow the steps to create the package.json file;
- Type 'npm install cypress --save-dev' to install cypress latest version;
- Type 'npx cypress open' to test if the cypress was installed correctly, configure cypress then close the browser;
- Type 'npm install @badeball/cypress-cucumber-preprocessor' to install the cypress cucumber preprocessor;
- If you want to use tysecript, type 'npm install --save-dev typescript';
- Type 'npm i @bahmutov/cypress-esbuild-preprocessor' to install the esbuild preprocessor;
- Put the following code on cypress.config.js

import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    baseUrl: "http://publicazo.insprak.com/",
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
    await addCucumberPreprocessorPlugin(on, config);

    on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)]
      })
    )

    return config;
    },
  },
});

- Create the features and the tests;
- Type 'npx cypress open' to run your test on local browser or 'npm run test' to run on server;