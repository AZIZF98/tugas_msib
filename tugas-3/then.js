/*
1. Dibawah terdapat function promise
2. Jalankan Promise dibawah dengan menggunakan .then dan .catch
3. Tampilkan hasil dari promise (dapat berupa resolve/reject) pada terminal
*/

function exercisePromise(age) {
  return new Promise(function (resolve, reject) {
    if (age > 18) {
      resolve("Kamu sudah dewasa");
    } else {
      reject("Kamu Masih Kecil");
    }
  });
}

exercisePromise(20)
.then(hasil => console.log(hasil))
.catch((err) => console.log(err));