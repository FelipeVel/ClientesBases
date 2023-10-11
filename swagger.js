const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de empleados',
    },
    components: {
      schemas: {
        Cliente: {
          type: 'object',
          properties: {
            numDocumento: {
              type: 'string',
              example: '1',
            },
            nombre: {
              type: 'string',
              example: 'Juan',
            },
            apellido: {
              type: 'string',
              example: 'Perez',
            },
            dirección: {
              type: 'string',
              example: 'Calle 123',
            },
            celular: {
              type: 'string',
              example: '123456789',
            },
            correo: {
              type: 'string',
              example: 'ejemplo@gmail.com',
            },
            idTipoDoc: {
              type: 'number',
              example: 1,
            },
          },
        },
        TipoDoc: {
          type: 'object',
          properties: {
            idtipodoc: {
              type: 'string',
              example: '1',
            },
            desctipodoc: {
              type: 'string',
              example: 'Cedula',
            },
          },
        },
      },
    },
  },
  apis: ['./controllers/*.controller.js', './routes/*.routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
