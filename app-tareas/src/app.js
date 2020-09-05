// Importar
const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/index");

//Configurar
let PORT = 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Habilitar rutas
routes.add(app);

//Levantar servidor

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error", err);
  }
  console.log(`Servidor levantado en 127.0.0.1:${PORT}`);
});
