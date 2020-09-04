//a = 6;
//b = 7;
console.log("Funciones");

//Funcion simple
function saludo() {
    console.log("Hola Mundo desde node.js");
}

saludo();

//Funcion Anónima
var saludo2 = function(){
    console.log("Hola Mundo desde node.js 2");
}

saludo2();

//Funcion Flecha

var saludo3 = () => {
    console.log("Hola Mundo desde node.js 3");
}

saludo3();

/******** */
function suma(a, b) {
    console.log("La suma es: ", a+b)
}

suma(5, 12);

const resta = function(a, b){
    console.log("La resta es: ", a-b)
}

resta(12, 5);

const multi = (a, b) => {
    console.log("La multiplicacion es: ", a*b)
}

multi(5, 8);

const server = (req, res) => {
    console.log("El servidor esta funciondo");
}
