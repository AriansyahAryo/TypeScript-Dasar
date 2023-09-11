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

class Person {
  private namePerson: string;
  private pinHP: string;

  constructor(namePerson: string) {
    this.namePerson = namePerson;
  }

  // Metode untuk mengubah nama
  changeName(name: string) {
    this.namePerson = name;
  }

  // Metode untuk mengambil nama
  getName() {
    return this.namePerson;
  }
}

// Contoh cara membuat objek dari class Person
const person = new Person('Tasmiyah');
console.log(person.getName()); // Output: Tasmiyah

// Mengganti nama dengan metode changeName
person.changeName('Bowo');
console.log(person.getName()); // Output: Bowo
