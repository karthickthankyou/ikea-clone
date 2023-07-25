declare namespace Cypress {
  interface Chainable<Subject> {
    reactComponent(): Chainable<string>
  }
}
