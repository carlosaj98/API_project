# API_project

GET api/categories -> Obtiene todas las categorías
GET api/categories/:id -> Obtiene una sola categoría 
POST api/categories -> Crea una categoría
PUT api/categories/:id -> Modifica una categoría
DELETE api/categories/:id -> Borra una categoría

----------------------------------------------------

GET api/movies -> Obtiene todas las películas
GET api/movies/:id -> Obtiene una sola película 
POST api/movies -> Crea una película
PUT api/movies/:id -> Modifica una película
DELETE api/movies/:id -> Borra una película

----------------------------------------------------

PUT api/scores/:id -> Añades una puntuación a una película

----------------------------------------------------

POST api/users/signup -> Creas un usuario
POST api/users/signin -> Entras con tu usuario

**************************************************

-- Usuarios no registrados: solo pueden acceder a los GET
-- Usuarios registrados: pueden además añadir una puntuación
-- Usuarios admin: pueden acceder a todo