// Pendaklarasian diVariabel TS
let userName: string = 'Ariansyah Aryo Prasetio';
let userAge: number = 40;
let isActive: boolean = true;
let userData: any = { email: 'ariansyah.aryo.prasetio@politala.ac.id' };

// Ini Buat Array TS
let userList: { name: string; age: number; isActive: boolean }[] = [
  { name: 'Alice', age: 25, isActive: true },
  { name: 'Bob', age: 35, isActive: false },
  { name: 'ryo', age: 15, isActive: true },
];

// Hapus salah satu pengguna dari array
userList.splice(0, 1);
// Menghapus pengguna pertama Alice
//dan array ryo tetep ada cuman alice yg ilang

// Fungsi TS
function getUserInfo(name: string, age: number, active: boolean) {
  return { name, age, isActive: active };
}

// OOP TS
class User {
  name: string;
  age: number;
  isActive: boolean;

  constructor(name: string, age: number, isActive: boolean) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
  }

  greet(greeting: string) {
    return `${greeting}, nama saya ${this.name}`;
  }
}

const userEve = new User('Eve', 28, true);

console.log(userName);
console.log(userAge);
console.log(isActive);
console.log(userData);
console.log(userList);
console.log(userEve.greet('Halo'));
