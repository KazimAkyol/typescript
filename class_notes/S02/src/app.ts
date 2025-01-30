//!!! Classes
class Student {
    stdCode: number
    stdName: string

    constructor (code: number, name:string){
        this.stdCode = code
        this.stdName = name
    }
}

let std1 = new Student (1, "Gokhan")
let std2 = new Student (2, "Kazim")
let std3 = new Student (3, "Gokhan")

console.log(std1)
console.log(std2)
console.log(std3)