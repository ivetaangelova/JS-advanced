class Person {
    static createdPersonCounter = 0;
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
        return (`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`)
    }
}
let iveta = new Person("Iveta", "Angelova", 23, "iveta_0052@mail.bg");
console.log(iveta);

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());


Person.printCounter();