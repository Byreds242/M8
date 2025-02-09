const { MongoClient, ObjectId } = require('mongodb');
const config = require('../config/mongo.config.js'); // Archivo de configuración

const client = new MongoClient(config.URI);
const dbName = config.DB;
let db;

// Conectar a la base de datos
async function connectDB() {
    if (!db) {
        try {
            await client.connect();
            console.log("Conectado a MongoDB");
            db = client.db(dbName);
        } catch (error) {
            console.error("Error al conectar con MongoDB:", error);
        }
    }
}

// Obtener todos los libros
async function getBooks(req, res) {
    await connectDB();
    try {
        const books = await db.collection('books').find().toArray();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener libros", error });
    }
}

// Crear un nuevo libro
async function createBook(req, res) {
    await connectDB();
    try {
        const newBook = req.body;
        const result = await db.collection('books').insertOne(newBook);
        res.json({ message: "Libro añadido", id: result.insertedId });
    } catch (error) {
        res.status(500).json({ message: "Error al añadir libro", error });
    }
}

// Actualizar un libro por ID
async function updateBook(req, res) {
    await connectDB();
    try {
        const bookId = req.params.id;
        const updatedBook = req.body;
        const result = await db.collection('books').updateOne(
            { _id: new ObjectId(bookId) },
            { $set: updatedBook }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        res.json({ message: "Libro actualizado" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar libro", error });
    }
}

// Eliminar un libro por ID
async function deleteBook(req, res) {
    await connectDB();
    try {
        const bookId = req.params.id;
        const result = await db.collection('books').deleteOne({ _id: new ObjectId(bookId) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Libro no encontrado" });
        }
        res.json({ message: "Libro eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar libro", error });
    }
}

// Exportar las funciones
module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};
