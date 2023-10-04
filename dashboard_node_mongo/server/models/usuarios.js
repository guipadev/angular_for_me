const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    roles: {
        type: Array,
        default: [],
    },
    tags: {
        type: Array,
        default: [],
    },
    online: {
        type: Boolean,
        default: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    receivePromoMessage: {
        type: Boolean,
        default: false,
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
    nombre_completo: {
        type: String,
        required: true,
    },
});

module.exports = model('Usuario', usuarioSchema);
