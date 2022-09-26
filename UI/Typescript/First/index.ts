const somethingFun: string = 'Riding my bike is fun!';
console.log(somethingFun);

const sandwich: string = 'BLT'; // string
const orderNumber: number = 1738; // number
const delicious: boolean = true; // boolean


function orderFood(sandwich: string, orderNumber: number): void {
    console.log(`Your order number is  ${1.06 * (orderNumber + 10)}  and contains a ${sandwich} sandwich`);
}

orderFood('Ham & Cheese', 32);


interface Person {
    age: number;
    name: string;
}
const fred = {} as Person;
fred.age = 57;
fred.name = 'Fred Wilkenson';

const personName: any = 'Fred Wilkenson';

const fredName = <string>personName;