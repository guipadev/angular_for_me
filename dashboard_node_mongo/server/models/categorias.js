const { Schema, model } = require('mongoose');

const categoriaSchema = Schema({
    descripcion: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
});

module.exports = model('Categoria', categoriaSchema);
