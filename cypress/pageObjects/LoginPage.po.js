export class LoginPage{
    usernameField() {return cy.get('input[name="userName"]')}
    
    visit(){
        cy.visit('http://167.114.201.175:5000/');
        this.usernameField().type('Admin')
    }
}
