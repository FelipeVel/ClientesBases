const utilities = require('../config/utilities');
const controller = {};

controller.getTipoDocs = async (req, res) => {
  const query = `SELECT * FROM TIPO_DOC`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.getTipoDocById = async (req, res) => {
  const { idtipodoc } = req.params;
  const query = `SELECT * FROM TIPO_DOC WHERE idtipodoc = ${idtipodoc}`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.createTipoDoc = async (req, res) => {
  const { idtipodoc, desctipodoc } = req.body;
  const query = `INSERT INTO TIPO_DOC VALUES (${idtipodoc}, '${desctipodoc}')`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.updateTipoDoc = async (req, res) => {
  const { idtipodoc } = req.params;
  const { desctipodoc } = req.body;
  const changeString = [];
  if (desctipodoc) changeString.push(`desctipodoc = '${desctipodoc}'`);
  const query = `UPDATE TIPO_DOC SET ${changeString.join(', ')} WHERE idtipodoc = ${idtipodoc}`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

controller.deleteTipoDoc = async (req, res) => {
  const { idtipodoc } = req.params;
  const query = `DELETE FROM TIPO_DOC WHERE idtipodoc = ${idtipodoc}`;
  const result = await utilities.executeQuery(query);
  res.json(result);
};

module.exports = controller;
