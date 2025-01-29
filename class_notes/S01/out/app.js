const car = {
    model: "Corolla",
    type: "Toyota",
    year: 2009,
    age(year) {
        console.log(`Age is ${year - 2009} `);
    },
};
console.log(car.type);
car.year = 2010;
console.log(car.model);
console.log(car.age(2025));
