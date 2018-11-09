function Person(firstName, lastName, age, mail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.mail = mail;
}

Person.prototype.toString = function () {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.mail})`;
};

let person = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(person);