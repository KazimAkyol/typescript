// console.log("Hello TS"); // Konsola merhaba yazdirir

// const a = (b, c) => b * c; // Bu kod iki rakami carpar

// TS ders-2

//& Intersection

type Book = {
  book_id: number;
  book_name: string;
};

type Author = {
  Author_id: number;
  Author_name: string;
};

type Sales = Book & Author;

let sales1: Sales = {
  Author_name: "J.R.R. Tolkien",
  book_name: "Lord of the Rings",
  book_id: 1234,
  Author_id: 1892,
};

//& Type Assertions

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

function topla(sayi1: number, ...sayilar: number[]): number {
  let toplam = sayi1;
  sayilar.forEach((sayi) => toplam + sayi);
  return toplam;
}

console.log(topla(1));
console.log(topla(2, 3, 4, 5, 6));
console.log(topla(7, 9, 100));
console.log(topla(5, 10, 20, 30, 40, 50));
