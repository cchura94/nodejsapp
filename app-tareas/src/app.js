// Importar
const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/index");

//Configurar
let PORT = 3000;

const app = express();
app.use(morgan("dev"));

//Habilitar rutas
routes.add(app);

//Levantar servidor

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error", err);
  }
  console.log(`Servidor levantado en 127.0.0.1:${PORT}`);
});
