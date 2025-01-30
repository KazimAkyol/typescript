function topla(sayi1, ...sayilar) {
    let toplam = sayi1;
    sayilar.forEach((sayi) => (toplam += sayi));
    return toplam;
}
console.log(topla(1));
console.log(topla(2, 3, 4, 5, 6));
console.log(topla(7, 9, 100));
console.log(topla(5, 10, 20, 30, 40, 50));
