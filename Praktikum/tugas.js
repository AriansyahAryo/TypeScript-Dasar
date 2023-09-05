"use strict";
// Pendaklarasian diVariabel TS
let userName = 'Ariansyah Aryo Prasetio';
let userAge = 40;
let isActive = true;
let userData = { email: 'ariansyah.aryo.prasetio@politala.ac.id' };
// Ini Buat Array TS
let userList = [
    { name: 'Alice', age: 25, isActive: true },
    { name: 'Bob', age: 35, isActive: false },
    { name: 'ryo', age: 15, isActive: true },
];
// Hapus salah satu pengguna dari array
userList.splice(0, 1);
// Menghapus pengguna pertama Alice
//dan array ryo tetep ada cuman alice yg ilang
// Fungsi TS
function getUserInfo(name, age, active) {
    return { name, age, isActive: active };
}
// OOP TS
class User {
    constructor(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
    greet(greeting) {
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
