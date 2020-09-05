var tareas = [];

// funcion simple
function listar(req, res) {
  res.json(tareas);
}

//funcion anónima
const guardar = function (req, res) {
  //console.log(req.body);
  tareas.push(req.body);

  res.json({ mensaje: "Tarea Registrada" });
};

//funcion flecha
const mostrar = (req, res) => {
  var id = req.params.id;

  tareas.forEach((t) => {
    if (t.id == id) {
      res.json(t);
    }
  });
};

function modificar(req, res) {
  var id = req.params.id;

  tareas.forEach((t) => {
    if (t.id == id) {
      t.titulo = req.body.titulo;
      t.descripcion = req.body.descripcion;
      res.json({ mensaje: "Tarea Modificada", t });
    }
  });
}

function eliminar(req, res) {
  var id = req.params.id;
  var posicion = 0;

  for (let i = 0; i < tareas.length; i++) {
    const element = tareas[i];
    if (element.id == id) {
      posicion = i;
    }
  }
  tareas.splice(posicion, 1);
  res.json({ mensaje: "Tarea Eliminada" });
}

module.exports = {
  listar,
  guardar,
  mostrar,
  modificar,
  eliminar,
};
