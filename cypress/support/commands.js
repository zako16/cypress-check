// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('apilogin', (email = "Admin", password = "Admin@Navi") => { 
    var token = async () => {
        const t = await fetch("http://167.114.201.175:5001/Token", requestOptions)
            .then(data => data.json())
            .then((json) => {
                return json.access_token})
        // cy.log(token) 
        return t
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", "Admin");
    urlencoded.append("password", "Admin@Navi");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    // const token = await fetch("http://167.114.201.175:5001/Token", requestOptions)
    //     .then(data => data.json())
    //     .then((json) => {
    //         return json.access_token})
    // cy.log(token) 
    return token
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })