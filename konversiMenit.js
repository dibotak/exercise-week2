function konversiMenit(menit) {
  var men = 0;
  var detik = 0;
  men = menit / 60;
  if (menit % 60 > 0) {
    detik = menit % 60;
  }

  //pembulatan
  var menString = men.toString();
  var bulat = "";
  for (var i = 0; menString[i] != "." && menit % 60 != 0; i++) {
    bulat += menString[i];
  }
  men = Number(bulat);

  if (men == 0 && menit % 60 == 0) {
    men = menit / 60;
  }

  //jawaban
  var jawaban;
  if (detik < 10) {
    jawaban = `${men}:0${detik}`;
  } else {
    jawaban = `${men}:${detik}`;
  }

  return jawaban;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
