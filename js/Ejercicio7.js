let primerNum = parseInt(prompt("Ingrese aquí el primer número."));
let segundoNum = parseInt(prompt("Ingrese aquí el segundo número."));
let tercerNum = parseInt(prompt("Ingrese aquí el tercer número"));

if (primerNum > segundoNum && primerNum > tercerNum) {
  document.write("El primer número es el mayor.");
} else if (segundoNum > primerNum && segundoNum > tercerNum) {
  document.write("El segundo número es el mayor.");
} else if (tercerNum > segundoNum && tercerNum > primerNum) {
  document.write("El tercer número es el mayor.");
} else {
  document.write("Uno o más números son iguales ");
}
