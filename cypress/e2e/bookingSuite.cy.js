import bookingPage from "../support/pages/bookingPage";
import user from "../fixtures/user.json"
import newAddress from "../fixtures/newAddress.json"

describe('Booking test suite',()=>{
describe ('Positive scenarios',()=>{
    it("Book the order",()=>{
    bookingPage.visit();
    bookingPage.bookOrder(user.email, user.password, newAddress.country, newAddress.name, newAddress.mobileNumber, newAddress.zipCode, newAddress.address, newAddress.city, newAddress.state);
})
})
})





   