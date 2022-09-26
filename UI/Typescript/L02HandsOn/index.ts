// Part 1
interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

class Entry implements Person {
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(firstName: string, lastName: string, birthday: Date) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.birthday = birthday
    }

}

let newPerson = new Entry("Albert", "Einstein", new Date("5-14-1879"));

console.log(`FirstName: ${newPerson.firstName}, Last Name: ${newPerson.lastName}, Birthday: ${newPerson.birthday}`);

// Part 2
let numbers: string[] = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];


function sortArray<S>(arr: S[]): S[] {
    return arr.sort();
}

console.log(`Array before sorting: ${numbers}`);
sortArray(numbers);
console.log(`Array after sorting: ${numbers}`);