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

// interface Calender {
//   events: string[];
//   addEvents(event: string): void;
// }

// class LMSCalender implements Calender {
//   constructor(public events: string[]) {}

//   addEvents(event: string): void {
//     this.events.push(event);
//   }
// }

// const de10 = new LMSCalender(["HTML", "React", "Typescript"]);
// const de11 = new LMSCalender(["HTML", "React"]);

//!!! Generics

//! Generic Interfaces

// interface Result<T> {
//   data: T | null;
// }

//! Generic Function

// function wrapInArr<T>(value: T) {
//   return [value];
// }

// let arr = wrapInArr(1);

//! Generic Classes

// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let kvp = new KeyValuePair<number, string>(1, "a");
// let shorter = new KeyValuePair(1, "a");

//! Multiple generic parameter example

function displayType<T, U>(param1: T, param2: U) {
  console.log(`param1:${typeof param1}, param2:${typeof param2}`);
}

displayType<number, string>(34, "Istanbul");
displayType<string, number>("Price", 250);
displayType(console.log, 5 > 8);

//!! Generics Utility Types

//! Type Mapping

// type ReadOnly<T> = {
//   readonly [K in keyof T]: T[K];
// };
// type Optional<T> = {
//   [K in keyof T]?: T[K];
// };
// type Nullable<T> = {
//   [K in keyof T]: T[K] | null;
// };

//! Utility Types

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// let product: Partial<Product>;
// let product: Required<Product>;
// let product: ReadOnly<Product>;
// let product: Pick<Product, "id" | "price">;
// let product: Omit<Product, "name">;
