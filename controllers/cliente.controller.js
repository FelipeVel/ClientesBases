const utilities = require('../config/utilities');
const controller = {};

controller.getCliente = async (req, res) => {
  const query = `SELECT * FROM CLIENTE`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.getClienteById = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM CLIENTE WHERE nodocumento = ${id}`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.createCliente = async (req, res) => {
  const { nodocumento, nombre, apellido, direccion, celular, correo } = req.body;
  const query = `INSERT INTO CLIENTE VALUES (${nodocumento}, '${nombre}', '${apellido}', '${direccion}', '${celular}', '${correo}')`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, direccion, celular, correo } = req.body;
  const changeString = [];
  if (nombre) changeString.push(`nombre = '${nombre}'`);
  if (apellido) changeString.push(`apellido = '${apellido}'`);
  if (direccion) changeString.push(`direccion = '${direccion}'`);
  if (celular) changeString.push(`celular = '${celular}'`);
  if (correo) changeString.push(`correo = '${correo}'`);
  const query = `UPDATE CLIENTE SET ${changeString.join(', ')} WHERE nodocumento = ${id}`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.deleteCliente = async (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM CLIENTE WHERE nodocumento = ${id}`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};
