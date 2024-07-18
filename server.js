/* npm run dev */
const express = require('express');
const app = express();//se instancia objeto
const http = require('http');//para peticiones http
const server = http.createServer(app);//creacion del servidor con las configuraciones del objeto app express

app.get("/", (req, res) => res.send([{hola:23}]));

server.listen(4008, () => {
    console.log('Servidor corriendo uyr ');
});
