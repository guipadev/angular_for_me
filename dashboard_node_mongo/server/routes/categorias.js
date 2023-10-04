const { Router } = require('express');
const { getCategorias, getCategoriaID, crearCategoria, actualizarCategoria, eliminarCategoria } = require('../controllers/categoriasController'); // Asegúrate de importar los controladores correctos para categorías
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validaciones');

const router = Router();

router.get('/', getCategorias);

router.get('/:id', getCategoriaID);

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        // Agrega las validaciones específicas para las categorías aquí
    ],
    validarCampos,
    crearCategoria
);

router.put('/:id',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
        // Agrega las validaciones específicas para las categorías aquí
    ],
    validarCampos,
    actualizarCategoria
);

router.delete('/:id', eliminarCategoria);

// Puedes agregar rutas adicionales específicas para categorías aquí

module.exports = router;
