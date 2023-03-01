let number =(parseInt(prompt("Ingrese el número"))); 

if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0 )

{

    document.write("EL número ingresado <strong> es divisible </strong>  por uno de los cuatro numeros asignados")

}

else {
    document.write("El número ingresado <strong> no es divisible </strong> por los números asignados")
}