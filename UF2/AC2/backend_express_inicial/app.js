<<<<<<< HEAD
const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

// Instanciación del servidor
const app = express()

// Configurar el middleware
app.use(cors())
app.use(express.json()) // parse json body content 
app.use('/',routes)

// Arranque del servidor
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
=======
const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')

// Instanciación del servidor
const app = express()

// Configurar el middleware
app.use(cors())
app.use(express.json()) // parse json body content 
app.use('/',routes)

// Arranque del servidor
app.listen(5000, () => {
    console.log('server is listening on port 5000')
})
>>>>>>> 9ff6f07 (modulo m8)
