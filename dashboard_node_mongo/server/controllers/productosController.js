// Importa el modelo de productos si aún no lo has hecho
const Producto = require('../models/productos'); // Asegúrate de importar el modelo correcto

// Obtener todos los productos
const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener los productos' });
    }
};

// Obtener un producto por ID
const getProductosID = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findById(id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al obtener el producto' });
    }
};

// Crear un nuevo producto
const crearProductos = async (req, res) => {
    const { nombre, descripcion, categoria, precio_venta, precio_regular, slug } = req.body;
    try {
        const nuevoProducto = new Producto({ nombre, descripcion, categoria, precio_venta, precio_regular, slug });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al crear el producto' });
    }
};

// Actualizar un producto por ID
const actualizarProductos = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, categoria, precio_venta, precio_regular, slug } = req.body;
    try {
        const producto = await Producto.findByIdAndUpdate(id, { nombre, descripcion, categoria, precio_venta, precio_regular, slug }, { new: true });
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al actualizar el producto' });
    }
};

// Eliminar un producto por ID
const eliminarProductos = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByIdAndDelete(id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al eliminar el producto' });
    }
};

// Obtener productos por filtros u otras consultas específicas (implementa esta función según tus necesidades)

// Puedes agregar más controladores y rutas específicas para productos aquí si es necesario

module.exports = {
    getProductos,
    getProductosID,
    crearProductos,
    actualizarProductos,
    eliminarProductos,
    // Agrega la función para obtener productos por filtros aquí si es necesario
};
