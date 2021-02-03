describe(`Application tests`, () => {
  it(`Search for Julianus01 github user`, () => {
    cy.fixture('application').then((data) => {
      cy.visit(`localhost:3000`)
      cy.get(`#username-input`)
        .type(data.username)
        .should(`have.value`, data.username)

      cy.get(`#search-button`).click()
      cy.url().should(`eq`, `http://localhost:3000/${data.username}?page=1`)
      cy.contains(data.name)
    })
  })

  it(`Check Julianus 01 reset link`, () => {
    cy.fixture('application').then((data) => {
      cy.visit(`http://localhost:3000/${data.username}?page=1`)
      cy.get(`#reset-link`).should(`have.attr`, `href`, `/`)
    })
  })

  it(`Check Julianus 01 profile link`, () => {
    cy.fixture('application').then((data) => {
      cy.visit(`http://localhost:3000/${data.username}?page=1`)
      cy.get(`#profile-link`)
        .should(`have.attr`, `target`, `_blank`)
        .should(`have.attr`, `href`, `https://github.com/${data.username}`)
    })
  })

  it(`Check Julianus01 first repo link`, () => {
    cy.fixture('application').then((data) => {
      cy.visit(`http://localhost:3000/${data.username}?page=1`)
      cy.get(`#repos-container`)
        .children()
        .first()
        .should(`have.attr`, `target`, `_blank`)
        .should(
          `have.attr`,
          `href`,
          `https://github.com/${data.username}/arctec-website`
        )
        .contains(`arctec-website`)
    })
  })

  it(`Check Julianus01 next page button`, () => {
    cy.fixture('application').then((data) => {
      cy.visit(`http://localhost:3000/${data.username}?page=1`)
      cy.get(`#next-page-button`).click({ force: true })
      cy.url().should(`eq`, `http://localhost:3000/${data.username}?page=2`)
    })
  })

  it(`Check Julianus01 previous page button`, () => {
    cy.fixture('application').then((data) => {
      cy.visit(`http://localhost:3000/${data.username}?page=2`)
      cy.get(`#previous-page-button`).click({ force: true })
      cy.url().should(`eq`, `http://localhost:3000/${data.username}?page=1`)
    })
  })

  it(`Check Julianus01 page 2 button`, () => {
    cy.fixture('application').then((data) => {
      cy.visit(`http://localhost:3000/${data.username}?page=1`)
      cy.get(`#page-2`).click({ force: true })
      cy.url().should(`eq`, `http://localhost:3000/${data.username}?page=2`)
    })
  })

  it(`Check Julianus-1 is not found and come back to landing`, () => {
    cy.fixture('application').then((data) => {
      cy.visit(`localhost:3000`)
      cy.get(`#username-input`)
        .type(data.notFoundUsername)
        .should(`have.value`, data.notFoundUsername)

      cy.get(`#search-button`).click()
      cy.url().should(
        `eq`,
        `http://localhost:3000/${data.notFoundUsername}?page=1`
      )

      cy.contains(data.notFoundUsername)
      cy.contains(`doesn't exist`)
      cy.get(`#back-home-button`).click({ force: true })
      cy.url().should(`eq`, `http://localhost:3000/`)
    })
  })
})
