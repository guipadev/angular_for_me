const { Router } = require('express');
const { getUsuarios, getUsuarioPorID, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuariosController'); // Importa el controlador de usuarios adecuado
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validaciones');

const router = Router();

router.get('/', getUsuarios); // Cambia la ruta y el nombre de la función del controlador
router.get('/:id', getUsuarioPorID); // Cambia la ruta y el nombre de la función del controlador

router.post('/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        // Agrega las validaciones específicas para los usuarios aquí
    ],
    validarCampos,
    crearUsuario
);

router.put('/:id',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        // Agrega las validaciones específicas para los usuarios aquí
    ],
    validarCampos,
    actualizarUsuario
);

router.delete('/:id', eliminarUsuario); // Cambia la ruta y el nombre de la función del controlador

// Puedes agregar rutas adicionales específicas para usuarios aquí

module.exports = router;
