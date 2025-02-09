<<<<<<< HEAD
// Importamos el modelo de datos
const Library = require('../models/Library')

// Declaración de controladores 
const getBooks = (async (req, res) => {
    try{
        // Instanciamos un modelo Library
        let library = new Library({});
        // Lo usamos para listar libros
        let books = await library.listAll();
        res.json(books);
        library.close();
    }
    catch{
        res.json("Error getting books...");
    }
})

const createBook = (async (req, res) => {
    try{
        // Instanciamos un modelo Library
        let library = new Library({});

        // Creamos un libro nuevo
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };

        // Usamos el modelo Library para crear libro
        let created = await library.create(newBook);
    
        if(created){
            console.log("Product created successfully")
            res.json("Product created successfully")
        }
        else{
            console.log("Error creating new book...")
            res.json("Error creating new book...");
        }
        library.close()
    }
    catch{
        console.log("Error creating new book...")
        res.json("Error creating new book...");
    }
    
})

const updateBook = ((req, res) => {

})

const deleteBook = ((req, res) => {

})

module.exports = {
    getBooks: getBooks,
    createBook: createBook,
    updateBook: updateBook,
    deleteBook: deleteBook
=======
const Library = require("../models/Library");

const books = new Library();

const getBooks = async (req, res) => {
  try {
    const booksList = await books.listAll();  // Llamada al método para obtener libros
    res.json(booksList);  // Devolver los libros en formato JSON
  } catch (error) {
    console.error("Error fetching books:", error);  // Para ver el error en consola
    res.status(500).json({ message: "Error getting books..." });
  }
};

module.exports = { getBooks };

const createBook = (async (req, res) => {
    try{
        // Instanciamos un modelo Library
        let library = new Library({});

        // Creamos un libro nuevo
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };

        // Usamos el modelo Library para crear libro
        let created = await library.create(newBook);
    
        if(created){
            console.log("Product created successfully")
            res.json("Product created successfully")
        }
        else{
            console.log("Error creating new book...")
            res.json("Error creating new book...");
        }
        library.close()
    }
    catch{
        console.log("Error creating new book...")
        res.json("Error creating new book...");
    }
    
})

const updateBook = async (req, res) => {
    try {
        // Instanciem Library
        let library = new Library({});

        // Obtenim l'ID del llibre a actualitzar
        const bookId = req.params.id;

        // Dades actualitzades del llibre
        const updatedBook = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year
        };

        // Cridem el mètode update del model
        const updated = await library.update(bookId, updatedBook);

        if (updated) {
            console.log("Book updated successfully");
            res.json("Book updated successfully");
        } else {
            console.log("Error updating book...");
            res.json("Error updating book...");
        }
        library.close();
    } catch (error) {
        console.log("Error updating book...", error);
        res.json("Error updating book...");
    }
};


const deleteBook = async (req, res) => {
    try {
        // Instanciem Library
        let library = new Library({});

        // Obtenim l'ID del llibre a eliminar
        const bookId = req.params.id;

        // Cridem el mètode delete del model
        const deleted = await library.delete(bookId);

        if (deleted) {
            console.log("Book deleted successfully");
            res.json("Book deleted successfully");
        } else {
            console.log("Error deleting book...");
            res.json("Error deleting book...");
        }
        library.close();
    } catch (error) {
        console.log("Error deleting book...", error);
        res.json("Error deleting book...");
    }
};


module.exports = {
    getBooks: getBooks,
    createBook: createBook,
    updateBook: updateBook,
    deleteBook: deleteBook
>>>>>>> 9ff6f07 (modulo m8)
}