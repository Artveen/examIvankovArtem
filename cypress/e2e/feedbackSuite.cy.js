import feedbackPage from "../support/pages/feedbackPage";
import feedbackUser from "../fixtures/feedbackUser.json"

describe ('Test suite for Feedback page', ()=>{
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