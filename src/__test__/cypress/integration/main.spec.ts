import faker from 'faker';

const { baseUrl } = Cypress.config();

describe('Main page', () => {
  beforeEach(() => {
    cy.server();
    cy.visit('/');
  });
  it('Should load with correct initial state', () => {
    cy.route({
      method: 'GET',
      url: /get_all_cities/,
      status: 200,
      response: {
        id: faker.random.uuid(),
        name: faker.address.city(),
      },
    });
    cy.getByTestId('candidates-job').should(
      'have.class',
      'sc-bqyKva bqnUvl',
      'Candidatospara sua vaga',
    );
    cy.getByTestId('tech').should(
      'have.attr',
      'title',
      'Tecnologia principal do candidato',
    );
    cy.getByTestId('result-candidates-job').should(
      'have.class',
      'sc-jrAGrp cFXEpq',
      'Encontramos5 desenvolvedorespara sua empresa',
    );
    cy.url().should('eq', `${baseUrl}/`);
  });
});
