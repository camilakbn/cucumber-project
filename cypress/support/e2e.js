// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
require('cypress-xpath');

import './commands'
import './pages_commands/login.commands'
import './elements_commands/login.elements'
import './pages_commands/pesquisar_servico.commands'
import './elements_commands/pesquisar_servico.elements'
import './pages_commands/editar_perfil.commands'
import './elements_commands/editar_perfil.elements'
// Alternatively you can use CommonJS syntax:
// require('./commands')