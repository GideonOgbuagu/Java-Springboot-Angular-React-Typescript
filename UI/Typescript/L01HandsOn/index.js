"use strict";
class ContactCard {
    constructor(firstName, phoneNumber) {
        this.firstName = firstName,
            this.phoneNumber = phoneNumber;
    }
    sendMessage() {
        console.log(`My first name is ${this.firstName} and my phone number is ${this.phoneNumber}`);
    }
}
let newPerson = new ContactCard("Gideon", 9125681234);
newPerson.sendMessage();
