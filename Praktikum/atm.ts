class Kartu {
  panjang: number;
  lebar: number;
}

class Atm extends Kartu {
  private pin: number;
  private noKartu: number;

  public constructor(pin: number, noKartu: number) {
    super();
    this.pin = pin;
    this.noKartu = noKartu;
  }
}

const atm_BRI = new Atm(1982, 8181726);
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
