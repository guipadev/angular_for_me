const { check, validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validarAlgo = [
  check('campo1', 'Mensaje de error personalizado para campo1').notEmpty(),
  check('campo2', 'Mensaje de error personalizado para campo2').isEmail(),
  // Agrega más validaciones según tus necesidades
];

module.exports = {
  validarCampos,
  validarAlgo,
};
