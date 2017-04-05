//var a=1, b=1;
//var c=a+b;
//a=b, b=c;
//c=a+b;
//a=b, b=c;
//c=a+b;

function fib(n) {
    var a = 1, b = 1;
  for (var i = 3; i<=n; i++) {
      var c = a + b;
      a = b;
      b = c;
  } 
  return b;
}
document.write(fib(3));
