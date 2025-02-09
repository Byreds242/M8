<<<<<<< HEAD
const express = require('express')
const books = require('../controllers/books.js')

// Instanciación del servidor
const router = express.Router()

// Configuración de las rutas
router.get('/api/books', books.getBooks)
router.post('/api/books', books.createBook)
router.put('/api/books', books.updateBook)
router.delete('/api/books', books.deleteBook)

module.exports = router
=======
const express = require('express');
const mysqlBooks = require('../controllers/books.js'); // Controlador para MySQL
const mongoBooks = require('../controllers/booksMongo.js'); // Controlador para MongoDB

const router = express.Router();

// Configuración de rutas para MySQL
router.get('/api/mysql/books', mysqlBooks.getBooks);
router.post('/api/mysql/books', mysqlBooks.createBook);
router.put('/api/mysql/books/:id', mysqlBooks.updateBook);
router.delete('/api/mysql/books/:id', mysqlBooks.deleteBook);

// Configuración de rutas para MongoDB
router.get('/api/mongo/books', mongoBooks.getBooks);
router.post('/api/mongo/books', mongoBooks.createBook);
router.put('/api/mongo/books/:id', mongoBooks.updateBook);
router.delete('/api/mongo/books/:id', mongoBooks.deleteBook);

module.exports = router;
>>>>>>> 9ff6f07 (modulo m8)
