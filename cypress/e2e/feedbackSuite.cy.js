import feedbackPage from "../support/pages/feedbackPage";
import feedbackUser from "../fixtures/feedbackUser.json"



describe ('Test suite for Feedback page', ()=>{
describe('Positive scenarios',()=>{
it('Submit feedback form',()=>{
    feedbackPage.visit();
    cy.get('[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]').click();
    cy.get('[id="comment"]').type(feedbackUser.comment);
    cy.get('[id="rating"]').type(`{leftArrow}, {leftArrow}`).click();
    cy.get('[id="captcha"]').then(function($elem) {
    cy.log($elem.text());
    let qweqwe = eval($elem.text());
    cy.log(qweqwe);
    cy.get('[id="captchaControl"]').type(qweqwe);
    cy.get('[id="submitButton"]').click();
    })
})
})
describe ('Negative scenarios', ()=>{
it("Submit feedback form with wrong captcha result",()=>{
    feedbackPage.visit();
    feedbackPage.sumbitFeedbackFormWithWrongCaptchaResult(feedbackUser.comment, feedbackUser.captcha)
})
it("Submit feedback form with long comment and wrong captcha result",()=>{
    feedbackPage.visit();
    feedbackPage.sumbitFeedbackFormWithLongComment(feedbackUser.longComment, feedbackUser.captcha)
})    
})
})