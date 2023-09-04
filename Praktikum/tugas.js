// Pendaklarasian diVariabel TS
var userName = 'Ariansyah Aryo Prasetio';
var userAge = 40;
var isActive = true;
var userData = { email: 'ariansyah.aryo.prasetio@politala.ac.id' };
// Ini Buat Array TS
var userList = [
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
    return { name: name, age: age, isActive: active };
}
// OOP TS
var User = /** @class */ (function () {
    function User(name, age, isActive) {
        this.name = name;
        this.age = age;
        this.isActive = isActive;
    }
    User.prototype.greet = function (greeting) {
        return "".concat(greeting, ", nama saya ").concat(this.name);
    };
    return User;
}());
var userEve = new User('Eve', 28, true);
console.log(userName);
console.log(userAge);
console.log(isActive);
console.log(userData);
console.log(userList);
console.log(userEve.greet('Halo'));
