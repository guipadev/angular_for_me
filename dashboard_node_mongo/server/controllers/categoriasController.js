// Importa el modelo de categoría si aún no lo has hecho
const Categoria = require('../models/categorias'); // Asegúrate de importar el modelo correcto

// Obtener todas las categorías
const getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener las categorías' });
    }
};

// Obtener una categoría por ID
const getCategoriaID = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findById(id);
        if (!categoria) {
            return res.status(404).json({ mensaje: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener la categoría' });
    }
};

// Crear una nueva categoría
const crearCategoria = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const nuevaCategoria = new Categoria({ nombre, descripcion });
        await nuevaCategoria.save();
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear la categoría' });
    }
};

// Actualizar una categoría por ID
const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        const categoria = await Categoria.findByIdAndUpdate(id, { nombre, descripcion }, { new: true });
        if (!categoria) {
            return res.status(404).json({ mensaje: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar la categoría' });
    }
};

// Eliminar una categoría por ID
const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findByIdAndDelete(id);
        if (!categoria) {
            return res.status(404).json({ mensaje: 'Categoría no encontrada' });
        }
        res.json({ mensaje: 'Categoría eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al eliminar la categoría' });
    }
};

// Puedes agregar más controladores y rutas específicas para categorías aquí si es necesario

module.exports = {
    getCategorias,
    getCategoriaID,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria,
};
