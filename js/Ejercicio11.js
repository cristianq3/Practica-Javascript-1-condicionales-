let num = parseInt(prompt("Ingrese un número"));

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

if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
  document.write(num + " no es divisible por los números propuestos");
}
