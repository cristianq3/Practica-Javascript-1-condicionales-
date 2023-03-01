//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

//Solicitamos el ingreso del numero y lo asignamos a la variable number

let number = parseInt(prompt("Ingrese el número"));

// Agregamos el condicional para saber si haciendo el resto nos da 0 por alguno de los números.
if (
  number % 2 === 0 ||
  number % 3 === 0 ||
  number % 5 === 0 ||
  number % 7 === 0
) {
  //Mostramos en pantalla cuando se cumpla la condición.

  document.write(
    "EL número ingresado <strong> es divisible </strong>  por uno de los cuatro numeros asignados"
  );
}
// Si la condicion no se cumple informar que no es divisible por ninguno e los números.
else {
  document.write(
    "El número ingresado <strong> no es divisible </strong> por los números asignados"
  );
}
