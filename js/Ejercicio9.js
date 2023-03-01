/*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla) */

// Se declara la variable con el valor de prompt

let frase = prompt("Ingrese una frase");

//Estructura for para recorrer por cada posicion del string y comparando con If si es  igual a alguna de las vocales.

for (i = 0; i < frase.length; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u"
  ) {
    //Al cumplirse la condicion de que charAr(i) es igual a alguna vocal, mostrar mediante substr solo 1 caractér.

    document.write("Incluye " + frase.substr(i, 1)) + "la letra";
  }
}
