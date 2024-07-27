

esIgualYNegativo(-3,-3);
console.log(""+esVerdaderoYFalso("arriba", "abajo"));
console.log("cual es mayor? "+obtenerMayor(2,3));
console.log("puedes entrar? "+mayoriaDeEdad(17));
var verdadero;
var mayor;

function esIgualYNegativo(a, b ) {
    // La función recibe dos argumentos "a" y "b" que son números.
    // Determina si son iguales y son ambos negativos.
    // De ser así, retorna true, de lo contrario, retorna false.
    // Tu código:

    if (a===b && a<0 && b<0){

    console.log("los numeros son iguales y negativos");function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
}

    }else
    console.log("no se cumple la condicion"+a+b);
    
  }
  
  function esVerdaderoYFalso(booleano1, booleano2) {
    // La función recibe dos argumentos "booleano1" y "booleano2".
    // Retorna true si ambos son verdaderos, caso contrario, retorna false.
    // Tu código:
   // console.log("es"+booleano1);
    if(booleano1=="arriba" && booleano2 == "abajo"){
        return true; 
    }

    else{
        console.log("es"+verdadero);
    }
    return false;

  }

  function obtenerMayor(x, y) {
    // "x" e "y" son números enteros.
    // Retorna el número más grande.
    // Si son iguales, retornar cualquiera de los dos.
    // Tu código:


    if(x > y ){
      return x;
    }
     if(y > x){
      return y;
     }
     if (x ==y){
      return "cualquiera de los dos";
     }


  }

  function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años o más, retorna el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:

    if (edad >=18){
      return "allowed";
    }else{
      return "Not allowed"
    }
  }
  
  
  