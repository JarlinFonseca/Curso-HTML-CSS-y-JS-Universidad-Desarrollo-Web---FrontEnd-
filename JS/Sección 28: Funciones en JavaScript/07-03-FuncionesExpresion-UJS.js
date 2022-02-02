//Declaración de la función
function miFuncion(a, b){
     return a + b;
}

//Llamando a la función
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaración Función de tipo Expresión
let sumar = function (a, b){return a + b};

let restar = function (a,b){return a-b};

resultado = sumar(1, 2);
console.log(resultado);

resultado2 = restar(18,11);
console.log(resultado2);