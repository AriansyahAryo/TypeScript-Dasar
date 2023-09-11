var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kartu = /** @class */ (function () {
    function Kartu() {
    }
    return Kartu;
}());
var Atm = /** @class */ (function (_super) {
    __extends(Atm, _super);
    function Atm(pin, noKartu) {
        var _this = _super.call(this) || this;
        _this.pin = pin;
        _this.noKartu = noKartu;
        return _this;
    }
    return Atm;
}(Kartu));
var atm_BRI = new Atm(1982, 8181726);
console.log(atm_BRI);
// class Kartu {
//   panjang: number;
//   lebar: number;
// }
// class ATM extends Kartu {
//   private pin: number;
//   private noKartu: number;
//   constructor(pin: number, noKartu: number) {
//     super();
//     this.pin = pin;
//     this.noKartu = noKartu;
//   }
//   // Metode untuk mengambil PIN
//   getPin() {
//     return this.pin;
//   }
//   // Metode untuk mengambil Nomor Kartu
//   getNoKartu() {
//     return this.noKartu;
//   }
// }
// // Contoh cara membuat objek dari class ATM
// const atmMachine = new ATM(1234, 5678901234567890);
// // Mengakses dan mencetak PIN dan Nomor Kartu
// console.log('PIN:', atmMachine.getPin());
// console.log('Nomor Kartu:', atmMachine.getNoKartu());
