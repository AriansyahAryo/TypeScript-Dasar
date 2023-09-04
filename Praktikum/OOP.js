var Orang = /** @class */ (function () {
    function Orang() {
    }
    Orang.prototype.getName = function () {
        return this.name;
    };
    Orang.prototype.setName = function (name) {
        this.name = name;
    };
    return Orang;
}());
var mhs = new Orang();
mhs.setName('Bowo');
console.log('namanya dia adalah ' + mhs.getName());
