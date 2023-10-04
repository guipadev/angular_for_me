// database/db.js

const mongoose = require('mongoose');
require('dotenv').config();

const dbCONN = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Asegúrate de que MONGODB_URI esté definido en tu archivo .env
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
};

module.exports = { dbCONN };
