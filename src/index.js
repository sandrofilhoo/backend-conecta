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
  "mongodb+srv://sandro:40028922@cluster0.ahurx.mongodb.net/Conecta?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
requireDir("./models");

//Primeira rota
app.use("/api", require("./routes"));

app.listen(3000);
