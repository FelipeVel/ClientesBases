const express = require('express');
const router = express.Router();
const tipoDocController = require('../controllers/tipoDoc.controller');

/**
 * @openapi
 * /tipos-doc:
 *   get:
 *     tags:
 *       - Tipos de documento
 *     summary: Obtener todos los tipos de documento
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/TipoDoc'
 */
router.get('/', tipoDocController.getTipoDocs);

/**
 * @openapi
 * /tipos-doc/{idtipodoc}:
 *   get:
 *     tags:
 *       - Tipos de documento
 *     summary: Obtener un cliente por su ID
 *     parameters:
 *       - in: path
 *         name: idtipodoc
 *         schema:
 *           type: number
 *           required: true
 *           description: ID del tipo de documento
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoDoc'
 */
router.get('/:idtipodoc', tipoDocController.getTipoDocById);

/**
 * @openapi
 * /tipos-doc:
 *   post:
 *     tags:
 *       - Tipos de documento
 *     summary: Crear un tipo de documento
 *     description: Crear un tipo de documento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoDoc'
 *     responses:
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       409:
 *         description: Conflict
 *       500:
 *         description: Internal Server Error
 */
router.post('/', tipoDocController.createTipoDoc);

/**
 * @openapi
 * /tipos-doc/{idtipodoc}:
 *   put:
 *     tags:
 *       - Tipos de documento
 *     summary: Actualizar un tipo de documento
 *     description: Actualizar un tipo de documento
 *     parameters:
 *       - in: path
 *         name: idtipodoc
 *         schema:
 *           type: number
 *         required: true
 *         description: ID del tipo de documento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoDoc'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoDoc'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.put('/:idtipodoc', tipoDocController.updateTipoDoc);

/**
 * @openapi
 * /tipos-doc/{idtipodoc}:
 *   delete:
 *     tags:
 *       - Tipos de documento
 *     summary: Eliminar un tipo de documento
 *     description: Eliminar un tipo de documento
 *     parameters:
 *       - in: path
 *         name: idtipodoc
 *         schema:
 *           type: number
 *         required: true
 *         description: ID del tipo de documento
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoDoc'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.delete('/:idtipodoc', tipoDocController.deleteTipoDoc);

module.exports = router;
