const { Router } = require('express');
const { getProductos, getProductosID, crearProductos, actualizarProductos, eliminarProductos, getBuscar } = require('../controllers/productosController');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validaciones');

const router = Router();

router.get('/', getProductos);

router.get('/:id', getProductosID);

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        check('categoria', 'La categoría es obligatoria').not().isEmpty(),
        check('precio_venta', 'El precio de venta es obligatorio').not().isEmpty(),
        check('precio_regular', 'El precio regular es obligatorio').not().isEmpty(),
        check('slug', 'La slug es obligatoria').not().isEmpty(),
    ],
    validarCampos,
    crearProductos
);

router.put('/:id',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        check('categoria', 'La categoría es obligatoria').not().isEmpty(),
        check('precio_venta', 'El precio de venta es obligatorio').not().isEmpty(),
        check('precio_regular', 'El precio regular es obligatorio').not().isEmpty(),
        check('slug', 'La slug es obligatoria').not().isEmpty(),
    ],
    validarCampos,
    actualizarProductos
);

router.delete('/:id', eliminarProductos);


module.exports = router;
