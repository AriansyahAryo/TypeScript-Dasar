// Variabel TypeScript
var userName = 'Ariansyah Aryo Prasetio';
var userAge = 40;
var isActive = true;
var userData = { email: 'ariansyah.aryo.prasetio@politala.ac.id' };
// Array TypeScript
var userList = [
    { name: 'Alice', age: 25, isActive: true },
    { name: 'Bob', age: 35, isActive: false },
];
// Hapus salah satu pengguna dari array
userList.splice(0, 1); // Menghapus pengguna pertama (Alice)
// Function TypeScript
function getUserInfo(name, age, active) {
    return { name: name, age: age, isActive: active };
}
// Class TypeScript
var User = /** @class */ (function () {
    function User(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
    User.prototype.greet = function () {
        return "Halo, nama saya ".concat(this.name);
    };
    return User;
}());
// Buat objek dari class User
var userEve = new User('Eve', 28, true);
console.log(userName);
console.log(userAge);
console.log(isActive);
console.log(userData);
console.log(userList);
console.log(getUserInfo('John', 45, true));
console.log(userEve.greet());
