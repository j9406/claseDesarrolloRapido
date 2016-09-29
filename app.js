var express = require("express");

var app = express();
//app.set -> este es el que permite con express usar un motor de templates en este caso JADE
app.set("view engine", "jade");
//app.get: Con este hacemos nuestro servidor
app.get("/", function(req, res){
  var saludo = "Hola Mil y asi !!";
  res.render("index");
});

app.listen(8080);
