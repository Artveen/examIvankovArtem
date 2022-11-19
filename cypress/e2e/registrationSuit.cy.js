import registrationPage from '../support/pages/registrationPage'
import user from '../fixtures/user.json'
import unvalidUser from '../fixtures/unvalidUser.json'




describe('Test suit for registration', ()=>{
    describe ('Positive scenarios',()=>{
    it("Create new user",()=>{
        registrationPage.visit();
        registrationPage.createNewCustomer(user.email, user.password, user.repeatPassword,user.answer)
    })    
    })
    describe('Negative scenarios',()=>{
    it("Try to create new user with long unvalidpassword and unvalid email",()=>{
        registrationPage.visit();
        registrationPage.submitRegistrationFormWithLongPassword(unvalidUser.unvalidEmail, unvalidUser.unvalidPassword, unvalidUser.unvalidRepeatPassword,user.answer)
    })
    })
})