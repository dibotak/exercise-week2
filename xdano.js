function xo(str) {
  var xtimes = 0;
  var otimes = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      xtimes++;
    } else if (str[i] === "o"){
      otimes++;
    }
  }

  if (xtimes === otimes) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
