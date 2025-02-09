<<<<<<< HEAD
const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes.js')

// Instanciación del servidor
const app = express()

// Configurar middleware
app.use(cors());          // para evitar CORS
app.use(express.json());  // para parsear contenido JSON
app.use('/', routes)      // para enrutar peticiones

// Arranque del servidor
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
=======
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js');
const Library = require('./models/Library');  // Modelo MySQL
const LibraryMongo = require('./models/LibraryMongo');  // Modelo MongoDB

// Variable para definir qué base de datos usar (MySQL o MongoDB)
const USE_MONGO = true;  // Cambia a true para usar MongoDB

// Instancia de la base de datos según la elección
const library = USE_MONGO ? new LibraryMongo() : new Library();

const app = express();

// Configurar middleware
app.use(cors());
app.use(express.json());

// Middleware para inyectar la base de datos en las rutas
app.use((req, res, next) => {
  req.library = library;  // Añade la instancia a cada request
  next();
});

// Configurar rutas
app.use('/', routes);

// Arranque del servidor
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
  console.log(`Using ${USE_MONGO ? "MongoDB" : "MySQL"} as database`);
});
>>>>>>> 9ff6f07 (modulo m8)
