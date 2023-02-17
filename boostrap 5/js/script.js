console.log("Hello world");
var a=1;
var b=2;
var c= a+b;
console.log("EL resultado es:" + c)

console.log("hello world")
var a=1;
var b=2;
var c= a*b;
console.log("EL resultado es:" + c)

console.log("hello world")
var a=1244;
var raiz= Math.sqrt(a);
console.log("El resultado es:" + raiz)

console.log("RAÍZ CUADRADA SIN FUNCIÓN:")
var f=Math.trunc(raiz)
console.log("El resultado es:" + f)

console.log("Número primos hasta el 5000:");
var c = 5000;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log("Los numero primos hasta el 5000 son: " + numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}



