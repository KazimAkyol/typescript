//!!! Classes
// class Student {
//   stdCode: number;
//   stdName: string;

//   constructor(code: number, name: string) {
//     this.stdCode = code;
//     this.stdName = name;
//   }
// }

// let std1 = new Student(1, "Gokhan");
// let std2 = new Student(2, "Kazim");
// let std3 = new Student(3, "Gokhan");

// console.log(std1);
// console.log(std2);
// console.log(std3);

//!!! Inheritance
// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Employee extends Person {
//   empCode: number;
//   constructor(code: number, name: string) {
//     super(name);
//     this.empCode = code;
//   }
//   displayName(): void {
//     console.log(this.name, this, this.empCode);
//   }
// }

// let person1 = new Person("Mark");

// let emp1 = new Employee(1001, "Mark");
// let emp2 = new Employee(1002, "Mike");
// let emp3 = new Employee(1003, "More");

// emp1.displayName();
// person1.displayName();

//!!! Abstract

// abstract class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   displayName(): void {
//     console.log(this.name);
//   }
//   abstract displayCode(): void;
// }

// class Employee extends Person {
//   empCode: number;
//   constructor(code: number, name: string) {
//     super(name);
//     this.empCode = code;
//   }
//   displayCode(): void {
//     console.log(this.empCode);
//   }
// }

// let employee1 = new Employee (1, "Mark")

// employee1.displayName()

// let Person1 = new Person ("mark")

//!!! Interfaces

interface Calender {
  events: string[];
  addEvents(event: string): void;
}

class LMSCalender implements Calender {
  constructor(public events: string[]) {}

  addEvents(event: string): void {
    this.events.push(event);
  }
}

const de10 = new LMSCalender(["HTML", "React", "Typescript"]);
const de11 = new LMSCalender(["HTML", "React"]);
