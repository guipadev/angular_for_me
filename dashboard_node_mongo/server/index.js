const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { dbCONN } = require('./database/db')

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Crear servidor

const app = express();

dbCONN();

// cors
app.use(cors());

// Lectura de un json
app.use(express.json())

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node JS API',
            version: '1.0.0'
        },
        servers: [
        {
            url: 'http://localhost:3000'
        }
        ]
    },
    apis: ['./index.js']
}

// Configuración Swagger
const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/productos', require('./routes/productos'))
app.use('/categorias', require('./routes/categorias'))
app.use('/usuarios', require('./routes/usuarios'))