const tareaController = require("./../controllers/tareaController");

module.exports.add = (app) => {
  app.get("/", function (req, res) {
    res.json({ mensaje: "INICIO" });
  });

  app.get("/contacto", function (req, res) {
    res.json({ mensaje: "CONTACTO" });
  });

  app.get("/acercade", function (req, res) {
    res.json({ mensaje: "NOSOTROS" });
  });

  //RUTAS DE TAREAS
  app.get("/tarea", tareaController.listar);
  app.post("/tarea", tareaController.guardar);
  app.get("/tarea/:id", tareaController.mostrar);
  app.put("/tarea/:id", tareaController.modificar);
  app.delete("/tarea/:id", tareaController.eliminar);
};
