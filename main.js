var a = 42;
var b = 22;

function printWindowValues() {
  for (v in window.globalThis) {
    console.log(v);
  }
}

function expTen(num, n) {
  var res = num;
  for (var i = 1; i < n; i++) {
    res *= num;
  }
  return res;
}

function getFuncRes(secret, val) {
  return secret(val);
}

printWindowValues();
console.log(expTen(5, 3));
getFuncRes(console.log, "Hello World");
