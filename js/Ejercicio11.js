// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

//asignamos a la variable mediante un prompt y nos aseguramos que sea nro entero parseInt.

let num = parseInt(prompt("Ingrese un número"));

// Voy mostrando en pantalla mediante condicionales IF si cumple con la condición de resto.

if (num % 2 === 0) {
  document.write(num + " es divisible por <strong>2</strong> <br>");
}
if (num % 3 === 0) {
  document.write(num + " es divisible por <strong>3</strong> <br>");
}
if (num % 5 === 0) {
  document.write(num + " es divisible por <strong>5</strong> <br>");
}
if (num % 7 === 0) {
  document.write(num + " es divisible por <strong>7</strong> <br>");
}

//La última condición si no es divisible por ninguno de los numeros muestra un mensaje. 

if (num == NaN || num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
  document.write(num + " no es divisible por los números propuestos");
}