// const express = require('express');
import express from "express";
import router from "./routes/index.js";
import db from './config/db.js'


const app = express();


//conectar a la base de datos
db.authenticate()
    .then( ()=> console.log('DB conectada'))
    .catch( error => console.log(error));

//definir puerto
const port = process.env.PORT || 4000;

//habilitar PUG
app.set('view engine', 'pug');

//obtener el año actual
app.use((req,res,next)=>{
    res.locals.nombreSitio = "Agencia de viajes"
    res.locals.actualYear = new Date().getFullYear();
    return next();
})

//body parser
app.use(express.urlencoded({extended:true}));

//Definir la carpeta publica
app.use(express.static('public'));

//agregar router
app.use('/',router);

app.listen( port , ()=>{
    console.log(`servidor online port:${port}`)
})