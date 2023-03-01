// Escribe un programa que pida un número y diga si es divisible por 2

//Se declara la variable con el valor del prompt y para que sea entero función parseInt
let numero = parseInt(
  prompt("Ingresá el Numero que queres saber si es divisible por 2")
);

//Estructura if else donde se realiza la operación resto para comparar si es divisible.
if (numero % 2 == 0) {
  document.write("El número ingresado <strong>SI</strong> divisible por 2");
} else {
  document.write("El número ingresado <strong>NO</strong> es divisible por 2");
}
