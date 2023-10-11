const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

/**
 * @openapi
 * /clientes:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: Obtener todos los clientes
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Cliente'
 */
router.get('/', clienteController.getClientes);

/**
 * @openapi
 * /clientes/{noDocumento}:
 *   get:
 *     tags:
 *       - Clientes
 *     summary: Obtener un cliente por su ID
 *     parameters:
 *       - in: path
 *         name: noDocumento
 *         schema:
 *           type: string
 *           required: true
 *           description: ID del cliente
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 */
router.get('/:id', clienteController.getClienteById);

/**
 * @openapi
 * /clientes:
 *   post:
 *     tags:
 *       - Clientes
 *     summary: Crear un cliente
 *     description: Crear un cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
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
router.post('/', clienteController.createCliente);

/**
 * @openapi
 * /clientes/{noDocumento}:
 *   put:
 *     tags:
 *       - Clientes
 *     summary: Actualizar un cliente
 *     description: Actualizar un cliente
 *     parameters:
 *       - in: path
 *         name: noDocumento
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.put('/:id', clienteController.updateCliente);

/**
 * @openapi
 * /clientes/{noDocumento}:
 *   delete:
 *     tags:
 *       - Clientes
 *     summary: Eliminar un cliente
 *     description: Eliminar un cliente
 *     parameters:
 *       - in: path
 *         name: noDocumento
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del periodo
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
