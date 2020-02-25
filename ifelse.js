var nama = '';
var peran = 'Tabib';

if (nama == '') {
  console.log('"Nama harus diisi!"');
} else if (nama && peran == '') {
  console.log(`"Halo ${nama}, Pilih peranmu untuk memulai game!"`);
} else if (nama && peran) {
  if (peran == 'Ksatria') {
    console.log(`"Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!"`);
  } else if (peran == 'Tabib') {
    console.log(`"Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka."`);
  } else if (peran == 'Penyihir') {
    console.log(`"Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`);
  }
}
