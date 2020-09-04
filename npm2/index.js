const express = require("express");
const app = express();

//LOGICA
app.get("/", (req, res) => {
  res.json({ mensaje: "Hola Mundo" });
});

app.get("/productos", (req, res) => {
  res.json({ mensaje: "Lista de productos" });
});

app.get("/contacto", (req, res) => {
  res.json({ mensaje: "Contactenos" });
});
//LEVANTAR EL SERVIDOR

app.listen(3000, function () {
  console.log("Servidor levantado en : 127.0.0.1:3000");
});
