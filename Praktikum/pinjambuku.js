// Definisikan kelas "Buku" dengan atribut judul, pengarang, dan tersedia
var Buku = /** @class */ (function () {
    // Konstruktor untuk membuat objek buku dengan nilai default tersedia true
    function Buku(judul, pengarang, tersedia) {
        if (tersedia === void 0) { tersedia = true; }
        this.judul = judul;
        this.pengarang = pengarang;
        this.tersedia = tersedia;
    }
    // Metode pinjam: mengubah status tersedia menjadi false jika tersedia
    Buku.prototype.pinjam = function () {
        if (this.tersedia) {
            this.tersedia = false;
            return true;
        }
        return false;
    };
    // Metode kembalikan: mengubah status tersedia menjadi true jika tidak tersedia
    Buku.prototype.kembalikan = function () {
        if (!this.tersedia) {
            this.tersedia = true;
            return true;
        }
        return false;
    };
    return Buku;
}());
// Definisikan kelas "Mahasiswa" dengan atribut nama, nim, dan daftarBukuPinjam
var Mahasiswa = /** @class */ (function () {
    // Konstruktor untuk membuat objek mahasiswa dengan nama dan NIM
    function Mahasiswa(nama, nim) {
        this.daftarBukuPinjam = [];
        this.nama = nama;
        this.nim = nim;
    }
    // Metode pinjamBuku: meminjam buku jika tersedia dan menambahkannya ke daftar buku pinjam
    Mahasiswa.prototype.pinjamBuku = function (buku) {
        if (buku.pinjam()) {
            this.daftarBukuPinjam.push(buku);
            console.log("".concat(this.nama, " (").concat(this.nim, ") berhasil meminjam buku \"").concat(buku.judul, "\""));
        }
        else {
            console.log("Maaf, buku \"".concat(buku.judul, "\" sedang tidak tersedia."));
        }
    };
    // Metode kembalikanBuku: mengembalikan buku jika telah dipinjam dan menghapusnya dari daftar buku pinjam
    Mahasiswa.prototype.kembalikanBuku = function (buku) {
        if (buku.kembalikan()) {
            var index = this.daftarBukuPinjam.indexOf(buku);
            if (index !== -1) {
                this.daftarBukuPinjam.splice(index, 1);
                console.log("".concat(this.nama, " (").concat(this.nim, ") berhasil mengembalikan buku \"").concat(buku.judul, "\""));
            }
        }
        else {
            console.log("Maaf, buku \"".concat(buku.judul, "\" tidak dapat dikembalikan."));
        }
    };
    // Metode tampilkanDaftarBukuPinjam: menampilkan daftar buku yang dipinjam oleh mahasiswa
    Mahasiswa.prototype.tampilkanDaftarBukuPinjam = function () {
        if (this.daftarBukuPinjam.length === 0) {
            console.log("".concat(this.nama, " (").concat(this.nim, ") belum meminjam buku."));
        }
        else {
            console.log("Daftar Buku yang Dipinjam oleh ".concat(this.nama, " (").concat(this.nim, "):"));
            this.daftarBukuPinjam.forEach(function (buku, index) {
                console.log("".concat(index + 1, ". ").concat(buku.judul, " - ").concat(buku.pengarang));
            });
        }
    };
    return Mahasiswa;
}());
// Membuat objek buku
var buku1 = new Buku('Joko Empire', 'Bowo never win');
var buku2 = new Buku('One Piece', 'E. Oda');
// Membuat objek mahasiswa
var mahasiswa1 = new Mahasiswa('Ucup', 'MHS0001');
var mahasiswa2 = new Mahasiswa('Fulan', 'MHS0002');
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
var buku3 = new Buku('1 jam jago ngoding', 'Dea A');
var buku4 = new Buku('Buku kosong aja', 'author tidak terdaftar');
// Membuat objek mahasiswa
var mahasiswa3 = new Mahasiswa('Budi', 'MHS0003');
var mahasiswa4 = new Mahasiswa('Saufi', 'MHS0004');
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
