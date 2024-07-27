var numero1 = 1;
var numero2 = 2;
var operacion;

resta(numero1, numero2);
multiplicacion(numero1, numero2);
division(numero1, numero2);


function suma (numero1, numero2){
    
    operacion = numero1 + numero2;
    return operacion;
}

function resta (numero1, numero2){
    operacion = numero1 - numero2;
    console.log("la resta es: "+operacion);
}

function multiplicacion (numero1, numero2){
    operacion = numero1 * numero2;
    console.log("la multiplicacion es: "+operacion);
}

function division (numero1, numero2){
    operacion = numero1 / numero2;
    console.log("la multiplicacion es: "+operacion);
}

console.log("asi se retorna "+ suma(1, 3));