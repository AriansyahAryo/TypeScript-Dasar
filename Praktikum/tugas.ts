// Variabel TypeScript
let userName: string = 'Ariansyah Aryo Prasetio';
let userAge: number = 40;
let isActive: boolean = true;
let userData: any = { email: 'ariansyah.aryo.prasetio@politala.ac.id' };

// Array TypeScript
let userList: { name: string; age: number; isActive: boolean }[] = [
  { name: 'Alice', age: 25, isActive: true },
  { name: 'Bob', age: 35, isActive: false },
];

// Hapus salah satu pengguna dari array
userList.splice(0, 1); // Menghapus pengguna pertama (Alice)

// Function TypeScript
function getUserInfo(name: string, age: number, active: boolean) {
  return { name, age, isActive: active };
}

// Class TypeScript
class User {
  name: string;
  age: number;
  isActive: boolean;

  constructor(name: string, age: number, isActive: boolean) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
  }

  greet() {
    return `Halo, nama saya ${this.name}`;
  }
}

// Buat objek dari class User
const userEve = new User('Eve', 28, true);

console.log(userName);
console.log(userAge);
console.log(isActive);
console.log(userData);
console.log(userList);
console.log(getUserInfo('John', 45, true));
console.log(userEve.greet());
