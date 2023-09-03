export class LoginPage{
    NavigatePage(){
        cy.visit("https://www.saucedemo.com/")
    } 

    UserNameTextbox(username){
        cy.get('#user-name').clear().type(username)
    }
    PasswordTextbox(password){
        cy.get('#password').clear().type(password)
    }
    ButtonClick()
    {
        cy.get('#login-button').click()
    }
        
    

    login(user){
        this.UserNameTextbox(user.username)
        this.PasswordTextbox(user.password)
        this.ButtonClick()
    }
}