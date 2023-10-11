const express = require('express');
const app = express();
const puerto = process.env.PORT || 8090;
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerDocs = require('./swagger.js');

// Cabeceras de seguridad
app.use(cors());

// Librerias para tratamiento de datos
require('dotenv').config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static('static'));

// Rutas

app.use('/clientes', require('./routes/cliente.routes'));
app.use('/tipos-doc', require('./routes/tipoDoc.routes'));

app.listen(puerto, (err) => {
  if (err) {
    console.error('Error escuchando: ', err);
    return;
  }
  console.log(`Escuchando en el puerto :${puerto}`);
  swaggerDocs(app);
});
