class feedbackPage{
visit(){
    cy.visit('http://juice-shop-sanitarskyi.herokuapp.com/#/contact')
}
closeDismissDialog(){
    return cy.get('[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]')
}
getCommentField(){
    return cy.get('[id="comment"]')
}
getRating(){
    return cy.get('[id="rating"]')
}
getCaptchaField(){
    return cy.get('[id="captchaControl"]')
}
getSubmitButton(){
    return cy.get('[id="submitButton"]')
}
sumbitFeedbackFormWithWrongCaptchaResult(comment, captcha){
    cy.log("SUbmit feedback form with wrong result in captcha")
    this.closeDismissDialog().click();
    this.getCommentField().type(comment);
    this.getRating().click();
    this.getCaptchaField().type(captcha);
    this.getSubmitButton().click();
}
sumbitFeedbackFormWithLongComment(longComment, captcha){
    cy.log("SUbmit feedback form with wrong result in captcha")
    this.closeDismissDialog().click();
    this.getCommentField().type(longComment);
    this.getRating().click();
    this.getCaptchaField().type(captcha);
    this.getSubmitButton().click();
}
}export default new feedbackPage 