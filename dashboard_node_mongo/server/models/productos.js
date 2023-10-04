const { Schema, model } = require('mongoose');

const productosSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    more_description: {
        type: String,
        required: false,
    },
    stock: {
        type: Number,
        required: false,
    },
    categoria: {
        type: Array,
        required: true,
    },
    imageUrls: {
        type: Array,
        required: false,
    },
    precio_venta: {
        type: Number,
        required: true,
    },
    precio_regular: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        default: 'tipo-audifonos-Blan10',
    },
    brand: {
        type: String,
        default: 'Sin Marca',
    },
    currency: {
        type: String,
        default: 'USD ($)',
    },
    status: {
        type: Boolean,
        default: false,
    },
    availability: {
        type: Boolean,
        default: false,
    },
    isBestSeller: {
        type: Boolean,
        default: false,
    },
    isNewArrival: {
        type: Boolean,
        default: false,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    isSpecialOffer: {
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
});

module.exports = model('Producto', productosSchema);
