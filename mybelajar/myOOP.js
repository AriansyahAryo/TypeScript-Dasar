// class Person {
//   private namePerson: string;
//   private pinHP: string;
//   //   constructor(namePerson: string) {
//   //     this.namePerson = namePerson;
//   //   }
//   Tasmiyah(namePerson: string) {
//     this.namePerson = namePerson;
//   }
// }
// // Contoh cara membuat objek dari class Person
// // const person1 = new Person('Tasmiyah');
// // console.log(person1);
// const person = new Person();
// person.Tasmiyah('Bowo');
// console.log(person.pinHP);
// console.log(person);
var Person = /** @class */ (function () {
    function Person(namePerson) {
        this.namePerson = namePerson;
    }
    // Metode untuk mengubah nama
    Person.prototype.changeName = function (name) {
        this.namePerson = name;
    };
    // Metode untuk mengambil nama
    Person.prototype.getName = function () {
        return this.namePerson;
    };
    return Person;
}());
// Contoh cara membuat objek dari class Person
var person = new Person('Tasmiyah');
console.log(person.getName()); // Output: Tasmiyah
// Mengganti nama dengan metode changeName
person.changeName('Bowo');
console.log(person.getName()); // Output: Bowo
