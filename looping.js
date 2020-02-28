//1. Melakukan looping menggunakan while
//looping pertama
console.log("LOOPING PERTAMA");
var x = 2;
while (x <= 20) {
  console.log(x + " - I love coding");
  x+=2;
}

//looping kedua
console.log("LOOPING KEDUA");
var x = 20;
while (x > 0) {
  console.log(x + " - I will become fullstack developer");
  x-=2;
}

console.log("");

//2. melakukan looping menggunakan for
//for loop

console.log("LOOPING PERTAMA");
for (var i = 1; i <= 20; i++) {
  console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
for (var i = 20; i > 0; i--) {
  console.log(i + " - I will become fullstack developer");
}

console.log("");
//3. Angka ganjil dan genap
for (var counter = 1; counter <= 100; counter++) {
  if (counter % 2 == 0) {
    console.log("GENAP");
  } else {
    console.log("GANJIL");
  }
}

for (var counter = 1; counter <= 100; counter+= 2) {
  if (counter % 3 == 0) {
    console.log(counter + " KELIPATAN 3");
  } else{
    console.log("");
  }
}

for (var counter = 1; counter <= 100; counter+= 5) {
  if (counter % 6 == 0) {
    console.log(counter + " KELIPATAN 6");
  } else{
    console.log("");
  }
}

for (var counter = 1; counter <= 100; counter+= 9) {
  if (counter % 10 == 0) {
    console.log(counter + " KELIPATAN 10");
  } else{
    console.log("");
  }
}
