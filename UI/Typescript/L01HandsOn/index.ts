interface Person {
    firstName: string,
    lastName?: string,
}

interface Contact {
    phoneNumber: number,
    email?: string,
}

class ContactCard implements Person, Contact {
    firstName: string;
    phoneNumber: number;

    constructor(firstName: string, phoneNumber: number) {
        this.firstName = firstName,
        this.phoneNumber = phoneNumber
    }

    sendMessage() {
        console.log(`My first name is ${this.firstName} and my phone number is ${this.phoneNumber}`)
    }
}

let newPerson = new ContactCard("Gideon", 9125681234);
newPerson.sendMessage();

