//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

//Declaración de las variables y se les asigna el valor del prompt, para que sean Nº enteros se usa parseInt.
let primerNum = parseInt(prompt("Ingrese el Primer Número"));
let segundoNum = parseInt(prompt("Ingrese el Segundo Número"));

//Estructura condicional para comparar y mostrar en pantalla el resultado.

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
