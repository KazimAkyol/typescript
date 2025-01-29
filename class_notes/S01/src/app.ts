// console.log("Hello TS"); // Konsola merhaba yazdirir

// const a = (b, c) => b * c; // Bu kod iki rakami carpar

//!!! TS ders-2

// let b: number;

// b = 7;

// let c: number = 42;

// c = 3.14;

// let d: string = "Selam";

// d = 25;

// let e: boolean = false;

// e = 5;

// e = "true";

// e = true;

//!!! Arrays

// let list1: number[] = [1, 2, 3];

// list1.push(4);

// list1.push("Ahmet");

// console.log(list1);

// let list2: Array<string> = ["a", "b"];

// list2.push("c");
// list2.push(2);

//!!! Tuples

// let myTuple1: [number, boolean, string];

// myTuple1 = [1, true, "mark"];

// console.log(myTuple1);

// let sinif: [number, string][];

// sinif = [
//   [1, "Gökhan"],
//   [2, "Kazim"],
//   [3, "Muhterem"],
//   [4, "Mark"],
// ];

// sinif.push([5, "Fatma"]);

// console.log(sinif);

//!!! enum

// const enum Role {
//   User = 10,
//   Admin = User * 2,
//   Guest,
// }

// enum Role2 {
//   User = 10,
//   Admin = User * 2,
//   Guest,
//   DBAdmin,
// }

// console.log("Role enum" + Role.User);
// console.log(Role2.Admin);

// enum StatusCode {
//   Notfound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }

// console.log(StatusCode.Accepted);

// const enum Tshirt {
//   Small = "S",
//   Medium = "M",
//   Large = "L",
//   Xlarge = 42,
//   XXLarge = Xlarge + 2,
//   XXXLarge,
// }

// console.log(Tshirt.XXLarge);

//!!! Any Type

// let d: any = 5;
// d = "Merhaba";
// d = false;

// let arr2: any[] = [1, "Admin", true];

//!!! Unknown

// let d: unknown = 5;

// let e: number = d;

// let f: any = d;

// let g: number = d as number;

// let h: number = d;

//!!! Void

// function warnUser(): void {
//   console.log("Hello World");
// }

//!!! Never

// function error(message: string): never {
//   throw new Error(message);
// }

//!!! Union

// let a: boolean | string = "hello";

// a = 5;

// a = true;

//!!! Type Aliases

// type Kombine = number | string;

// let k: Kombine = "Selam";

// k = 42;

// k = true;

//!!! String Literals



//!!! Intersection

// type Book = {
//   book_id: number;
//   book_name: string;
// };

// type Author = {
//   Author_id: number;
//   Author_name: string;
// };

// type Sales = Book & Author;

// let sales1: Sales = {
//   Author_name: "J.R.R. Tolkien",
//   book_name: "Lord of the Rings",
//   book_id: 1234,
//   Author_id: 1892,
// };

//!!! Type Assertions

// let str: unknown = "Hello World";

// console.log((str as string).length);
// console.log((<string>str).length);
// console.log(str.length);

//& Functions

// function selamla(mesaj: string, isim: string): void {
//   console.log(`${mesaj} ${isim}`);
// }

// selamla("Günaydin", "Mark");
// selamla("Günaydin");
// selamla("Günaydin", "Mark", "Nasilsin?");

// function selamla2(mesaj: string, isim: string): void {
//   console.log(`${mesaj} ${isim}`);
// }

// selamla2("Günaydin", "Mark");
// selamla2("Günaydin");
// selamla2("Günaydin", "Mark", "Nasilsin?");

// function selamla2(mesaj: string, isim: string): void {
//   if (!isim) isim = "Misafir Kullanici";
//   console.log(`${mesaj} ${isim}`);
// }

// selamla2("Günaydin", "Mark");
// selamla2("Günaydin");
// selamla2("Günaydin", "Mark", "Nasilsin?");

// function selamla3(mesaj: string, isim: string = "Konuk"): void {
//   console.log(`${mesaj} ${isim}`);
// }

// selamla3("Günaydin", "Mark");
// selamla3("Günaydin");
// selamla3("Günaydin", "Mark", "Nasilsin?");

// let selamla4 =
//   () =>
//   (mesaj: string, isim: string): string => {
//     return `${mesaj} ${isim}`;
//   };

//^ Overloading

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: any, b: any): any {
//   return a + b;
// }

// console.log(add(1, 2));
// console.log(add("Hello", "World"));

//^ Rest Parameters

// function topla(sayi1: number, ...sayilar: number[]): number {
//   let toplam = sayi1;
//   sayilar.forEach((sayi) => toplam + sayi);
//   return toplam;
// }

// console.log(topla(1));
// console.log(topla(2, 3, 4, 5, 6));
// console.log(topla(7, 9, 100));
// console.log(topla(5, 10, 20, 30, 40, 50));
