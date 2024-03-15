/*
    1. Cobalah untuk membuat sebuah function untuk menghitung Luas Permukaan sebuah balok (nama function bebas)
    2. function tersebut menerima 3 parameter yaitu: panjang, lebar, tinggi
    3. Rumus luas permukaan balok: 2 x ((panjang x tinggi) + (panjang x lebar) + (lebar x tinggi))
    4. Kamu dapat mencari luas permukaan balok di internet agar lebih jelas
    5. Setelah selesai melakukan kalkulasi maka kembalikan value tersebut dengan return pada function
    6. Terakhir, Panggil Function tersebut lalu tampilkan hasilnya pada terminal (bisa di setor ke variabel atau langsung)
*/
var panjang = 5;
var lebar = 3;
var tinggi = 4;
var hasilLuas = luas(panjang, lebar, tinggi);

function luas (panjang, lebar, tinggi) {
    var hasil = 2 * ((panjang * tinggi) + (panjang * lebar) + (lebar * tinggi));
    return hasil;
}

console.log("Menghitung luas dengan", panjang, ", lebar", lebar, ", dan tinggi", tinggi, "adalah:", hasilLuas);
