function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let baseString = super.toString().substring(0, super.toString().length - 1);
            return baseString += `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let baseString = super.toString().substring(0, super.toString().length - 1);
            return baseString += `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let container = personAndTeacher();
let Person = container.Person;
let Teacher = container.Teacher;
let Student = container.Student;
let person = new Person("Stamat", "stamatBg@gmail.com");
let teacher = new Teacher("Ignat", "igi@abv.bg", "mathematics");
let student = new Student("Pesho", "pepi@gmail.com", "JavaScript Core");
console.log(person);
console.log(teacher);
console.log(student);