* **`models/Library.js` (o el archivo donde esté definida la clase `Library`)**
  * **¿Por qué?**
    Este archivo contiene la clase que gestiona la conexión con la base de datos y realiza las operaciones CRUD.
  * **¿Qué buscar?**
    * Cómo está estructurado el constructor para la conexión a MySQL.
    * Métodos existentes para operaciones de lectura o inserción (te servirán de referencia).
    * Debes agregar nuevos métodos como `updateBook()` y `deleteBook()`.
* **Controladores (`controllers/libraryController.js` o similar)**
  * **¿Por qué?**
    Aquí se encuentran las funciones que responden a las peticiones HTTP (GET, POST, etc.).
  * **¿Qué buscar?**
    * La estructura de las funciones actuales para saber cómo instancian la clase `Library` y llaman a sus métodos.
    * Debes agregar nuevas funciones, como `updateBook(req, res)` y `deleteBook(req, res)`, que deleguen la lógica en los métodos del modelo.
* **Rutas (`routes/libraryRoutes.js` o similar)**
  * **¿Por qué?**
    Define las rutas que permiten acceder a las funciones del controlador.
  * **¿Qué buscar?**
    * Las rutas actuales para ver cómo están configuradas.
    * Deberás agregar nuevas rutas para `PUT /books/:id` (modificación) y `DELETE /books/:id` (eliminación).
* **Base de Datos (estructura de la tabla `books` o similar)**
  * **¿Por qué?**
    Necesitas saber cómo está estructurada la tabla para poder escribir consultas SQL precisas.
  * **¿Qué buscar?**
    * Los nombres de las columnas (por ejemplo: `id`, `title`, `author`, `year`, etc.).
    * Verificar si hay restricciones como claves primarias o foráneas que puedan afectar las operaciones de borrado o modificación.
* **Archivo de Configuración de la Base de Datos (`config/db.js` o `.env`)**
  * **¿Por qué?**
    Para verificar que la conexión a la base de datos esté configurada correctamente mientras pruebas las nuevas funcionalidades.
* **Opcional: Cliente de Pruebas (Postman o archivo `frontend.js` si existe)**
  * **¿Por qué?**
    Para probar las nuevas rutas que implementes y asegurarte de que las operaciones de modificación y eliminación funcionan como se espera.

---

### **Paso 1: Iniciar el servidor y configurar phpMyAdmin**

1. **Asegúrate de tener XAMPP o WAMP (u otro servidor local con PHP y MySQL) instalado en tu máquina** . Si no lo tienes, descárgalo e instálalo desde su sitio web oficial.
2. **Inicia el servidor Apache y MySQL** desde el panel de control de XAMPP o WAMP. Ambos servicios deben estar en "Running".
3. **Accede a phpMyAdmin** :

* Abre un navegador y ve a la URL `http://localhost/phpmyadmin/`.
* Deberías ver la página de inicio de phpMyAdmin.

### **Paso 2: Crear la base de datos y las tablas**

1. **Crear la base de datos** :

* En phpMyAdmin, en la página principal, busca la opción **"Base de datos"** en la barra de navegación superior.
* Crea una nueva base de datos (si no la has creado ya). Ingresa el nombre `books` y haz clic en  **"Crear"** .

1. **Importar el archivo SQL (si tienes uno que crea la base de datos y las tablas)** :

* Si tienes un archivo `books.sql` (como mencionaste anteriormente), en phpMyAdmin selecciona la base de datos `books` y ve a la pestaña  **"Importar"** .
* Haz clic en **"Seleccionar archivo"** y selecciona el archivo `books.sql` desde tu computadora.
* Haz clic en  **"Continuar"** . Esto importará la estructura de la base de datos y los datos de los libros.

### **Paso 3: Comprobar la base de datos**

1. **Verifica las tablas** :

* En phpMyAdmin, dentro de la base de datos `books`, deberías ver una tabla llamada `books` (o la que hayas creado).
* Haz clic en la tabla para ver su estructura y los datos insertados.

### **Paso 4: Probar el API (Backend)**

1. **Asegúrate de que el servidor esté corriendo** :

* Si estás utilizando un servidor como `Express.js` o un servidor PHP para tu backend, asegúrate de que esté corriendo. Si usas Node.js para el backend, en tu terminal, navega a la carpeta donde tienes el archivo `server.js` y ejecuta:

  <pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none px-4 py-1" aria-label="Copiar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar</button></span><span class="" data-state="closed"><button class="flex select-none items-center gap-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-xs"><path d="M2.5 5.5C4.3 5.2 5.2 4 5.5 2.5C5.8 4 6.7 5.2 8.5 5.5C6.7 5.8 5.8 7 5.5 8.5C5.2 7 4.3 5.8 2.5 5.5Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.66282 16.5231L5.18413 19.3952C5.12203 19.7678 5.09098 19.9541 5.14876 20.0888C5.19933 20.2067 5.29328 20.3007 5.41118 20.3512C5.54589 20.409 5.73218 20.378 6.10476 20.3159L8.97693 19.8372C9.72813 19.712 10.1037 19.6494 10.4542 19.521C10.7652 19.407 11.0608 19.2549 11.3343 19.068C11.6425 18.8575 11.9118 18.5882 12.4503 18.0497L20 10.5C21.3807 9.11929 21.3807 6.88071 20 5.5C18.6193 4.11929 16.3807 4.11929 15 5.5L7.45026 13.0497C6.91175 13.5882 6.6425 13.8575 6.43197 14.1657C6.24513 14.4392 6.09299 14.7348 5.97903 15.0458C5.85062 15.3963 5.78802 15.7719 5.66282 16.5231Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 7L18.5 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>Editar</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre language-bash"><span>node server.js
  </span></code></div></div></pre>

  Si es PHP, asegúrate de que el servidor PHP esté activo.

1. **Verifica que la API esté funcionando** :

* Abre el navegador o una herramienta como **Postman** o **Insomnia** y prueba las rutas de tu API. Por ejemplo:

  * **GET** : `http://localhost:5000/api/books`
  * **POST** : `http://localhost:5000/api/books`
  * **PUT** : `http://localhost:5000/api/books`
  * **DELETE** : `http://localhost:5000/api/books`

  Si la API responde correctamente con datos o confirma las modificaciones (añadir, editar, eliminar), entonces la API está funcionando bien.

### **Paso 5: Verificar la conexión entre el frontend y el backend**

1. **Asegúrate de que tu frontend se conecta correctamente al backend** :

* Abre la consola del navegador (presionando F12 y luego selecciona la pestaña "Consola").
* Asegúrate de que el frontend esté haciendo las solicitudes correctamente, y observa si hay errores de JavaScript.
* Si la API devuelve resultados esperados (como obtener libros, añadir, editar o eliminar), eso significa que la conexión entre el frontend y el backend está funcionando.

1. **Interacción en la interfaz** :

* Prueba la funcionalidad de la página web: añadir un libro, editarlo, eliminarlo y asegurarte de que la tabla se actualiza correctamente con cada acción.

### **Paso 6: Comprobar la base de datos después de la interacción con la API**

1. **Revisa la base de datos** :

* Después de realizar acciones en el frontend (por ejemplo, añadir un libro), ve a phpMyAdmin y verifica si los datos se han insertado correctamente en la tabla `books`.
* Si eliminas un libro o modificas uno, verifica también si los cambios se reflejan correctamente en phpMyAdmin.

### **Paso 7: Solución de problemas**

1. **Errores comunes** :

* Si no puedes ver los datos, asegúrate de que tu servidor esté ejecutándose correctamente.
* Si obtienes un error como `404` o `500`, asegúrate de que las rutas de la API estén correctas y que el servidor esté configurado correctamente.
* Si ves errores en la consola del navegador, verifica que la URL de la API en tu JavaScript esté correcta (debería ser `http://localhost:5000/api/books` o similar dependiendo de tu configuración).

### **Resumen**

1. Asegúrate de que tu servidor (PHP o Node.js) esté corriendo.
2. Verifica que la base de datos y las tablas estén correctamente configuradas en phpMyAdmin.
3. Prueba las rutas de la API (GET, POST, PUT, DELETE) con herramientas como Postman.
4. Verifica que el frontend interactúa correctamente con el backend.
5. Revisa la base de datos después de interactuar con la aplicación para ver los cambios.



const express =require('express')

const cors =require('cors')

const routes =require('./routes/routes.js')

// Instanciación del servidor

const app =express()

// Configurar middleware

app.use(cors());          // para evitar CORS

app.use(express.json());  // para parsear contenido JSON

app.use('/',routes)      // para enrutar peticiones

// Arranque del servidor

app.listen(5000,()=>{

    console.log('server is listening on port 5000')

})
