// Definisikan kelas "Buku" dengan atribut judul, pengarang, dan tersedia
class Buku {
  judul: string;
  pengarang: string;
  tersedia: boolean;

  // Konstruktor untuk membuat objek buku dengan nilai default tersedia true
  constructor(judul: string, pengarang: string, tersedia: boolean = true) {
    this.judul = judul;
    this.pengarang = pengarang;
    this.tersedia = tersedia;
  }

  // Metode pinjam: mengubah status tersedia menjadi false jika tersedia
  pinjam() {
    if (this.tersedia) {
      this.tersedia = false;
      return true;
    }
    return false;
  }

  // Metode kembalikan: mengubah status tersedia menjadi true jika tidak tersedia
  kembalikan() {
    if (!this.tersedia) {
      this.tersedia = true;
      return true;
    }
    return false;
  }
}

// Definisikan kelas "Mahasiswa" dengan atribut nama, nim, dan daftarBukuPinjam
class Mahasiswa {
  nama: string;
  nim: string;
  daftarBukuPinjam: Buku[] = [];

  // Konstruktor untuk membuat objek mahasiswa dengan nama dan NIM
  constructor(nama: string, nim: string) {
    this.nama = nama;
    this.nim = nim;
  }

  // Metode pinjamBuku: meminjam buku jika tersedia dan menambahkannya ke daftar buku pinjam
  pinjamBuku(buku: Buku) {
    if (buku.pinjam()) {
      this.daftarBukuPinjam.push(buku);
      console.log(`${this.nama} (${this.nim}) berhasil meminjam buku "${buku.judul}"`);
    } else {
      console.log(`Maaf, buku "${buku.judul}" sedang tidak tersedia.`);
    }
  }

  // Metode kembalikanBuku: mengembalikan buku jika telah dipinjam dan menghapusnya dari daftar buku pinjam
  kembalikanBuku(buku: Buku) {
    if (buku.kembalikan()) {
      const index = this.daftarBukuPinjam.indexOf(buku);
      if (index !== -1) {
        this.daftarBukuPinjam.splice(index, 1);
        console.log(`${this.nama} (${this.nim}) berhasil mengembalikan buku "${buku.judul}"`);
      }
    } else {
      console.log(`Maaf, buku "${buku.judul}" tidak dapat dikembalikan.`);
    }
  }

  // Metode tampilkanDaftarBukuPinjam: menampilkan daftar buku yang dipinjam oleh mahasiswa
  tampilkanDaftarBukuPinjam() {
    if (this.daftarBukuPinjam.length === 0) {
      console.log(`${this.nama} (${this.nim}) belum meminjam buku.`);
    } else {
      console.log(`Daftar Buku yang Dipinjam oleh ${this.nama} (${this.nim}):`);
      this.daftarBukuPinjam.forEach((buku, index) => {
        console.log(`${index + 1}. ${buku.judul} - ${buku.pengarang}`);
      });
    }
  }
}

// Membuat objek buku
const buku1 = new Buku('Joko Empire', 'Bowo never win');
const buku2 = new Buku('One Piece', 'E. Oda');

// Membuat objek mahasiswa
const mahasiswa1 = new Mahasiswa('Ucup', 'MHS0001');
const mahasiswa2 = new Mahasiswa('Fulan', 'MHS0002');

// Mahasiswa Alice meminjam buku
mahasiswa1.pinjamBuku(buku1);
mahasiswa1.pinjamBuku(buku2);

// Mahasiswa Bob meminjam buku
mahasiswa2.pinjamBuku(buku1);

// Menampilkan daftar buku yang dipinjam oleh masing-masing mahasiswa
mahasiswa1.tampilkanDaftarBukuPinjam();
mahasiswa2.tampilkanDaftarBukuPinjam();

// Mahasiswa Alice mengembalikan buku
mahasiswa1.kembalikanBuku(buku1);

// Menampilkan daftar buku yang dipinjam oleh masing-masing mahasiswa setelah pengembalian
mahasiswa1.tampilkanDaftarBukuPinjam();
mahasiswa2.tampilkanDaftarBukuPinjam();

// Membuat objek buku
const buku3 = new Buku('1 jam jago ngoding', 'Dea A');
const buku4 = new Buku('Buku kosong aja', 'author tidak terdaftar');

// Membuat objek mahasiswa
const mahasiswa3 = new Mahasiswa('Budi', 'MHS0003');
const mahasiswa4 = new Mahasiswa('Saufi', 'MHS0004');

// Mahasiswa Rizky meminjam buku
mahasiswa3.pinjamBuku(buku3);
mahasiswa3.pinjamBuku(buku4);

// Mahasiswa Diana meminjam buku
mahasiswa4.pinjamBuku(buku3);

// Menampilkan daftar buku yang dipinjam oleh masing-masing mahasiswa
mahasiswa3.tampilkanDaftarBukuPinjam();
mahasiswa4.tampilkanDaftarBukuPinjam();

// Mahasiswa Rizky mengembalikan buku
mahasiswa3.kembalikanBuku(buku3);

// Menampilkan daftar buku yang dipinjam oleh masing-masing mahasiswa setelah pengembalian
mahasiswa3.tampilkanDaftarBukuPinjam();
mahasiswa4.tampilkanDaftarBukuPinjam();
