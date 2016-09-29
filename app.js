var express = require("express");

var app = express();
app.set("view engine", "jade");

app.get("/", function(req, res){
  var saludo = "Hola Mil y asi !!";
  res.render("index");
});

app.listen(8080);
