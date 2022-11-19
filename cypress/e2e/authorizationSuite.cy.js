import authorizationPage from "../support/pages/authorizationPage";
import user from "../fixtures/user.json"
import unvalidLogin from "../fixtures/unvalidLogin.json"




describe('Authorization test suite', ()=>{
describe('Positive scenarios', ()=>{
it("Authorization",()=>{
    authorizationPage.visit();
    authorizationPage.submitLoginForm(user.email, user.password);
})
})
describe('Negative scenarios', ()=>{
it("unvalidAuthorization",()=>{
    authorizationPage.visit();
    authorizationPage.unvalidLogin(unvalidLogin.incorrectEmail, unvalidLogin.incorrectPassword)
})    
})
afterEach('Log out',()=>{
 it("Log out")
})
})