const http = require("http");

http.createServer((solicitud, respuesta) => {
    console.log("Hola Mundo");
    respuesta.end("<h1>Bienvenidos al curso MEAN</h1>");

}).listen(3000, function (){
    console.log("Servidor Levantado en 127.0.0.1:3000")
});