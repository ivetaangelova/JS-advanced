class Person {
    static createdPersonCounter = 0;
    firstName;
    lastName;
    age;
    email;
    constructor(firstName, lastName, age, email) {
        Person.createdPersonCounter++
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

    }
    static printCounter() {

        console.log(this.createdPersonCounter);

    }
    toString() {
        return (`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);
    }
    static clone(person) {
        // return new Person(`${this.firstName}, ${this.lastName}, ${this.age}, ${this.email}`);
        return new Person(person.firstName, person.lastName, person.age, person.email);


    }
}
let iveta = new Person("Iveta", "Angelova", 23, "iveta_0052@mail.bg");
console.log(iveta);

const person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

Person.printCounter();

let ivetaClone = Person.clone(iveta);
console.log(ivetaClone.toString());

console.log(`---------------`);
console.log(person+'')