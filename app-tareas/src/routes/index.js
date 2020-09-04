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
};
