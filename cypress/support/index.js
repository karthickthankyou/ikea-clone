// ***********************************************************
// This example support/index.js is processed and
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

import './commands'
import '../plugins/addCSS'
import '@cypress/code-coverage/support'

// import { setupMockServer } from '../../src/mocks'

// Cypress.on('test:before:run:async', async () => {
//   if (window.msw) {
//     console.log('MSW is already running.')
//   }

//   if (!window.msw) {
//     console.log('Starting MSW...')
//     await setupMockServer()
//   }
// })
