const utilities = require('../config/utilities');
const controller = {};

controller.getClientes = async (req, res) => {
  const query = `SELECT * FROM cliente`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.getClienteById = async (req, res) => {
  const { numDocumento } = req.params;
  const query = `SELECT * FROM cliente WHERE numDocumento = '${numDocumento}'`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.createCliente = async (req, res) => {
  const { numDocumento, idTipoDoc, nombre, apellido, direccion, celular, correo } = req.body;
  const query = `INSERT INTO cliente VALUES ('${numDocumento}', ${idTipoDoc}, '${nombre}', '${apellido}', '${direccion}', '${celular}', '${correo}')`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.updateCliente = async (req, res) => {
  const { numDocumento } = req.params;
  const { nombre, apellido, direccion, celular, correo, idTipoDoc } = req.body;
  const changeString = [];
  if (nombre) changeString.push(`nombre = '${nombre}'`);
  if (apellido) changeString.push(`apellido = '${apellido}'`);
  if (direccion) changeString.push(`direccion = '${direccion}'`);
  if (celular) changeString.push(`celular = '${celular}'`);
  if (correo) changeString.push(`correo = '${correo}'`);
  if (idTipoDoc) changeString.push(`idTipoDoc = ${idTipoDoc}`);
  const query = `UPDATE cliente SET ${changeString.join(
    ', '
  )} WHERE numDocumento = '${numDocumento}'`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.deleteCliente = async (req, res) => {
  const { numDocumento } = req.params;
  const query = `DELETE FROM cliente WHERE numDocumento = '${numDocumento}'`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

module.exports = controller;
