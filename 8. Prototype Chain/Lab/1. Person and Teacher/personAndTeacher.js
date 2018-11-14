function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);

            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

let container = personAndTeacher();
let Person = container.Person;
let Teacher = container.Teacher;
let person = new Person("Stamat", "stamatBg@gmail.com");
let teacher = new Teacher("Ignat", "igi@abv.bg");

console.log(person);
console.log(teacher);