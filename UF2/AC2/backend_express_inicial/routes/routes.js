const express = require('express');
const books = require('../controllers/books');

const router = express.Router();

// Rutas GET y POST
router.get('/api/books', books.getBooks);
router.post('/api/books', books.createBook);

// Rutas PUT y DELETE
router.put('/api/books/:id', books.updateBook);
router.delete('/api/books/:id', books.deleteBook);

module.exports = router;
