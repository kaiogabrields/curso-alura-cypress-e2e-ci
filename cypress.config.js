const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "axak6m",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', //diretorio onde ficara o report criado
      overwrite: false, //Não vai sobrescrever
      html: true, //Gerar um artigo Html
      json: false, //Não criar um relatório em json
      timestamp: "mmddyyyy_HHMMss" //formato da data
    },
  },
});
