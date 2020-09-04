const fs = require("fs");

console.log("1. Primera linea de codigo");

fs.writeFile("./datos.txt", "Prueba", function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("2. Archivo Creado");
  }
});

console.log("3. Ultima Linea de codigo");
