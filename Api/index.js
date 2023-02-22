const express = require("express");

const server =  express();

const mongoose = require("mongoose");

const routes = require("./routes");

server.use(express.json());

server.listen(5500, ()=>{
    console.log("Serveur lancé");

    mongoose.set('strictQuery', false);
    
    mongoose.connect("mongodb://127.0.0.1:27017/car3000");
    const db = mongoose.connection;
    db.once("open", ()=> console.log("Connexion OK")).on("error", error => console.error("dsgsdnjgkfhsdj",error));
});

routes(server);