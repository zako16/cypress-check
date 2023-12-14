describe("GET /users", () => {
    it("gets a list of users", async () => {
        
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
        cy.request("http://167.114.201.175:5001/Token", options=requestOptions)
            .then(data => data.json())
            .then((json) => {
                return json.access_token})
        cy.log(tok)
    })
  })
  