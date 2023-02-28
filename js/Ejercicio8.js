let numero = parseInt(
  prompt("Ingresá el Numero que queres saber si es divisible por 2")
);

if (numero % 2 == 0) {
  document.write("El número ingresado <strong>SI</strong> divisible por 2");
} else {
  document.write("El número ingresado <strong>NO</strong> es divisible por 2");
}