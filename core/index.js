const http = require("http"); // ES5
//import http from "http"; // ES6, ES7 Es2018,
/*
let prueba2  = 5;
if(true){
    prueba2 = 6;
    console.log("IF: ", prueba2)
}
console.log(prueba2)
*/
let host = "127.0.0.1";
let port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  if (req.method == "GET") {
    if (req.url == "/productos") {
      res.end("<h1>Lista de productos</h1>");
    }
    if (req.url == "/") {
      res.end("<h1>Principal</h1>");
    }
  }
});

server.listen(port, host, () => {
  console.log(`El servidor esta levantado en http://${host}:${port}`);
});
