// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

// Se declaran las variables con cada valor de los prompt.
let primerNum = parseInt(prompt("Ingrese aquí el primer número."));
let segundoNum = parseInt(prompt("Ingrese aquí el segundo número."));
let tercerNum = parseInt(prompt("Ingrese aquí el tercer número"));

//Se usa estructura else if  para comparar el mayor.
if (primerNum > segundoNum && primerNum > tercerNum) {
  document.write("El primer número es el mayor.");
} else if (segundoNum > primerNum && segundoNum > tercerNum) {
  document.write("El segundo número es el mayor.");
} else if (tercerNum > segundoNum && tercerNum > primerNum) {
  document.write("El tercer número es el mayor.");
} else {
  document.write("Uno o más números son iguales ");
}
