// cypress/tests/api/api-users.spec.ts
import { BaseController}  from "../api-core/Controllers/BaseController"

describe("GET /users", () => {
    let token = ""
    const bc = new BaseController()

    before( async() => {

        const tok  = await bc.authorize()
        process.env.token = `Bearer ${tok}`
        cy.log(process.env)
    })


    it("gets a list of users", async () => {
        const clients  = await bc.getClientsList()
        cy.log(clients)
        // cy.log(clients.TotalCount)
        // cy.expect(clients.TotalCount).equal(588)
        // Object.entries(clients.Items[0]).forEach(([key, value]) => {
        //     cy.log(key, value)
        //   })
    })
  })
  