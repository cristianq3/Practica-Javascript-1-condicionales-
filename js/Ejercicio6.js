let primerNum = parseInt(prompt("Ingrese el Primer Número"));
let segundoNum = parseInt(prompt("Ingrese el Segundo Número"));

if (primerNum != segundoNum) {
  if (primerNum > segundoNum) {
    document.write("El primer número es mayor");
  } else {
    document.write("El segundo número es mayor");
  }
}
else {
    document.write("Los números son iguales")
}
