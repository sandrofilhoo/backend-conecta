const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
const url =
  "urlDoBanco";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
requireDir("./models");

//Primeira rota
app.use("/api", require("./routes"));

app.listen(3000);
