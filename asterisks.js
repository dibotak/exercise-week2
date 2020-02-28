//1. Menyusun barisan bintang
var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
for (var i = 0; i < rows1; i++) {
  console.log("*");
}

console.log("");
//2. Menyusun barisan bintang dengan nested looping
var rows2 = 5; // input the number of rows

// do loops to display asterisks in the console.
for (var i = 0; i < rows2; i++) {
  var aster = "";
  for (var j = 0; j < rows2; j++) {
    aster += "*";
  }
  console.log(aster);
}

console.log("");
//3. Menyusun barisan tangga bintang dengan nested looping
var rows3 = 5; // input the number of rows

// do loops to display asterisks in the console.
var ast = "";
for (var i = 0; i < rows3; i++) {
  ast += "*"
  console.log(ast);
}
