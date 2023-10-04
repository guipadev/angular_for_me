// usuariosController.js

const { validationResult } = require('express-validator');
// Importa los modelos o realiza las operaciones necesarias para interactuar con la base de datos
// Por ejemplo, aquí puedes importar un modelo de usuario si estás utilizando una base de datos

// Obtener todos los usuarios
const getUsuarios = async (req, res) => {
  try {
    // Lógica para obtener todos los usuarios desde la base de datos
    // Por ejemplo, supongamos que tienes un modelo de usuario llamado "Usuario"
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
};

// Obtener un usuario por ID
const getUsuarioPorID = async (req, res) => {
  const { id } = req.params;
  try {
    // Lógica para obtener un usuario por su ID desde la base de datos
    // Por ejemplo, supongamos que tienes un modelo de usuario llamado "Usuario"
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener usuario por ID' });
  }
};

// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
  // Valida los errores de validación
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre } = req.body;

  try {
    // Lógica para crear un nuevo usuario en la base de datos
    // Por ejemplo, supongamos que tienes un modelo de usuario llamado "Usuario"
    const nuevoUsuario = new Usuario({ nombre });
    await nuevoUsuario.save();
    res.json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear usuario' });
  }
};

// Actualizar un usuario por ID
const actualizarUsuario = async (req, res) => {
  const { id } = req.params;

  // Valida los errores de validación
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre } = req.body;

  try {
    // Lógica para actualizar un usuario existente en la base de datos
    // Por ejemplo, supongamos que tienes un modelo de usuario llamado "Usuario"
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      { nombre },
      { new: true }
    );
    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuarioActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar usuario' });
  }
};

// Eliminar un usuario por ID
const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    // Lógica para eliminar un usuario por su ID desde la base de datos
    // Por ejemplo, supongamos que tienes un modelo de usuario llamado "Usuario"
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar usuario' });
  }
};

module.exports = {
  getUsuarios,
  getUsuarioPorID,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
