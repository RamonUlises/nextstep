# Backend Startup Pixels

## Instalación
Para instalar las dependencias necesarias, ejecute el segundo comando:

``` bash
pnpm install
```

## Uso

- Para iniciar el servidor, ejecute el siguiente comando:
``` bash
pnpm start
```

- Para iniciar en modo desarrollo, ejecute el siguiente comando:

``` bash
pnpm run dev
```

Para escuchar los cambios usamos el comando experimental **--watch** de node junto a la dependencia tsx

## Tecnologías

- Node js
- TypeScript
- Express
- JWT (autentificación)
- Mongo DB (base de datos)

## Documentación

### Configuración del proyecto

Usamos ESLint, es una herramienta de análisis de código estático que se utiliza para identificar y reportar patrones encontrados en el código ECMAScript/JavaScript. En este proyecto, ESLint se configura para trabajar con TypeScript y asegurar que el código siga las mejores prácticas y convenciones de estilo.

El archivo de configuración de ESLint `eslint.config.js` incluye reglas específicas para TypeScript y se integra con el archivo `.prettierrc.json` de Prettier para formatear el código automáticamente.

TypeScript y el archivo `tsconfig.json` nos permite la creación de aleas para los imports dentro de los archivos, el cual nos ayuda para url grande por ejemplo `./routes/empresas.ts` usando aleas sería `@routes/empresas`

El proyecto cuenta con un archivo **.env**, este guarda las variables de entorno que usamos en el código, se hace para no revelar información privada sobre la conexión a la base de datos, credenciales para verificar la IP, credenciales de autentificación y el patrón para la incriptación de contraseñas.

Estructura del archivo **.env**:
```
ONGODB_URI = url-conexion-mongo-atlas
ATLAS_API_KEY = api-key-de-mongo
ATLAS_API_USER = api-user-de-mongo
ATLAS_GROUP_ID = id-del-proyecto-en-mongo-atlas
USER_AUTH = usuario-de-autentificación
PASSWORD_AUTH = contraseña-de-autentificación
ENCRYPTION_KEY = clave-de-incriptación
```

La entrada del servidor `(app.ts)`, crea el app que viene de express, luego crea el puerto que se usará, si no viene el puerto en las variables de entorno lo iniciará en el puerto 3000 por defecto.

- Usa el middleware de `express` para indicarle que se usará formato `json`:
- Utiliza `morgan` para que en modo desarrollo podamos ver en consola las peticiones que se le hacen a nuestro servidor.
- Cuando se hace una petición, esta pasa por dos middleware, uno de ellos busca la ruta a la que se le hizo la petición, si no está en el router muestra un error `404` que indica que la url no existe, de lo contrario se activa el segundo middleware que verifica que dentro de los headers de la petición venga las claves de autentificación, si no vienen o son incorrectas, muestra un error `401` que indica que no está autorizado.

### Organización de carpetas

- **node_modules/**: Contiene las dependencias del proyecto instaladas a través de pnpm.
- **dist/**: Contiene los archivos compilados y listos para producción.
- **scripts/**: Contiene scripts necesarios para la build que realiza tsc y tsc-aleas
- **src/**:
  - **controllers/**: Contiene los controladores que manejan la lógica de negocio y las interacciones con la base de datos.
  - **database/**: Contiene la conexión a la base de datos en Mongo Atlas, verifica la IP para agregarla a las IP permitidas de Mongo.
    - **request/**: Contiene las peticiones http a la base de datos en Mongo Atlas.
  - **lib/**: Contiene scripts del proyecto que automatizan los procesos que realiza el servidor cuando hace la autentificación, peticiones, errores, entre otras.
  - **router/**: Contiene las definiciones de las rutas de la API.
  - **schemas/**: Contiene los esquemas creados para la base de datos, las propiedades que tendrá cada una de las entidades y sus tipos.
  - **types/**: Contiene los types, interfaces, enums que usamos para definir los tipos de TypeScript.


## Endpoints

Cada uno de estos endpoind corresponde a una `url` específica y un método http `(GET, POST, PUT, DELETE, entre otros)`, que define la acción que se realiará.

Las respuesta que de el servidor luego de la petición sera en archivos `json`.

### Empresas

#### GET /api/empresas
Obtiene la información de todas las empresas, en este caso tenemos 2 empresas registradas en la BD:

**Respuesta**

``` json
{
  "data": [
    {
      "id": "id-empresa-1",
      "numero-identificacion": "número-identificación",
      "certificado-registro": "certificado-registro",
      "licencia-comercial": "licencia-comercial",
      "nombre": "nombre-empresa",
      "direccion": ["direccion 1", "dirección 2"],
      "telefono": ["teléfono 1", "teléfono 2"],
      "email": ["email 1", "email 2"],
      "contrasena": "contraseña-empresa",
      "redes-sociales": ["red 1", "red 2"],
      "mision": "mision-empresa",
      "vision": "vision-empresa",
      "objetivos": ["objetivos"],
      "puntuacion": 4,
      "imagen": "url-imagen"
    },
    {
      "id": "id-empresa-2",
      "numero-identificacion": "número-identificación",
      "certificado-registro": "certificado-registro",
      "licencia-comercial": "licencia-comercial",
      "nombre": "nombre-empresa",
      "direccion": ["direccion 1", "dirección 2"],
      "telefono": ["teléfono 1", "teléfono 2"],
      "email": ["email 1", "email 2"],
      "contrasena": "contraseña-empresa",
      "redes-sociales": ["red 1", "red 2"],
      "mision": "mision-empresa",
      "vision": "vision-empresa",
      "objetivos": ["objetivos"],
      "puntuacion": 4,
      "imagen": "url-imagen"
    }
  ]
}
```

#### GET /api/empresas/:id
En este caso tenemos un parametro el cuál le nombramos `id`, este endpoint lo que hace es traernos la información de una empresa en especifico, en este caso la empresa que le pertenzca el `id`.

Tomemos está petición como ejemplo: **GET** **/api/empresas/id-empresa-3**

``` json
{
  "message": "Empresa no encontrada"
}
```

En este caso en la BD no tenemos un id llamado `id-empresa-3` por lo cuál el servidor muestra un status `404` y un mensaje que indica que la empresa no ha sido encontrada.

Ahora probemos con otra petición: **GET** **/api/empresas/id-empresa-2**

``` json
{
  "data": [
    {
      "id": "id-empresa-2",
      "numero-identificacion": "número-identificación",
      "certificado-registro": "certificado-registro",
      "licencia-comercial": "licencia-comercial",
      "nombre": "nombre-empresa",
      "direccion": ["direccion 1", "dirección 2"],
      "telefono": ["teléfono 1", "teléfono 2"],
      "email": ["email 1", "email 2"],
      "contrasena": "contraseña-empresa",
      "redes-sociales": ["red 1", "red 2"],
      "mision": "mision-empresa",
      "vision": "vision-empresa",
      "objetivos": ["objetivos"],
      "puntuacion": 4,
      "imagen": "url-imagen"
    }
  ]
}
```

En este caso, el id `id-empresa-2` si existe por lo cuál el servidor nos da un status `200` y muestra toda la información de está empresa.

#### POST /api/empresas
Cuándo le hacemos una petición `POST` a el endpoint de empresa, esta necesita una serie de propiedades para crear un registro de la empresa en la BD.

**Propiedades que necesita el registro**:
``` json
{
  "numero-identificacion": "número-identificación",
  "certificado-registro": "certificado-registro",
  "licencia-comercial": "licencia-comercial",
  "nombre": "nombre-empresa",
  "direccion": ["direccion 1", "dirección 2"],
  "telefono": ["teléfono 1", "teléfono 2"],
  "email": ["email 1", "email 2"],
  "contrasena": "contraseña-empresa",
  "redes-sociales": ["red 1", "red 2"],
  "mision": "mision-empresa",
  "vision": "vision-empresa",
  "objetivos": ["objetivos"],
  "puntuacion": 4,
  "imagen": "url-imagen"
}
```

Tomemos como ejemplo esta petición: **POST** **/api/empresas**

**Datos** **enviados**:
``` json
{
  "numero-identificacion": "número-identificación",
  "certificado-registro": "certificado-registro",
  "licencia-comercial": "licencia-comercial",
  "nombre": "nombre-empresa",
  "direccion": ["direccion 1", "dirección 2"],
  "telefono": ["teléfono 1", "teléfono 2"],
  "email": ["email 1", "email 2"],
  "contrasena": "contraseña-empresa",
  "redes-sociales": ["red 1", "red 2"],
  "mision": "mision-empresa",
  "vision": 89765,
  "puntuacion": 4,
}
```

**Respuesta**:
``` json
{
  "error": [
    {
      "propiedad": "vision",
      "mensaje": "Expected string, received number",
      "recibido": "number"
    },
    {
      "propiedad": "objetivos",
      "mensaje": "Required",
      "recibido": "undefined"
    },
    {
      "propiedad": "imagen",
      "mensaje": "Required",
      "recibido": "undefined"
    }
  ]
}
```

En este caso obtenemos un status de `400` y un error, esté nos muestra las propiedades que hacen falta, como es el caso de `objetivos` e `imagen`, y el mensaje que nos indica que es requerido, o como en el caso de `vision` que le pasamos un número y el servidor esperaba una cadena de texto.

Tomemos otro ejemplo: **POST** **/api/empresas**

**Datos** **enviados**:
``` json
{
  "numero-identificacion": "número-identificación",
  "certificado-registro": "certificado-registro",
  "licencia-comercial": "licencia-comercial",
  "nombre": "nombre-empresa",
  "direccion": ["direccion 1", "dirección 2"],
  "telefono": ["teléfono 1", "teléfono 2"],
  "email": ["email 1", "email 2"],
  "contrasena": "contraseña-empresa",
  "redes-sociales": ["red 1", "red 2"],
  "mision": "mision-empresa",
  "vision": "vision-empresa",
  "objetivos": ["objetivos"],
  "puntuacion": 4,
  "imagen": "url-imagen"
}
```

**Respuesta**:
```json
{
  "message": "Empresa creada con éxito"
}
```
El servidor nos da un status `200`, y un mensaje indicandonos que la empresa ha sido creada con éxito, cabe tomar en cuenta que `contrasena` antes de subirse a la base de datos es inciptada, además de eso no se le pasa una propiedad `id`, ya que este es creado en el servidor antes de subirse a la base de datos.

#### PUT /api/empresas/:id
En el caso de hacer actualizaciones a la empresas, se tiene que pasar en la url el párametro `id` para indicarle a que empresa le haremos la actualización. Tener en cuenta que se le tiene que pasar un `json` con todas las propiedades, si no se la hará actualización a alguna propiedad enviarla como estaba antes.

Ejemplo:  **PUT** **/api/empresas/id-empresa-3**

**Datos** **enviados**:
``` json
{
  "numero-identificacion": "número-identificación",
  "certificado-registro": "certificado-registro",
  "licencia-comercial": "licencia-comercial",
  "nombre": "nombre-empresa",
  "direccion": ["direccion 1", "dirección 2"],
  "telefono": ["teléfono 1", "teléfono 2"],
  "email": ["email 1", "email 2"],
  "contrasena": "contraseña-empresa",
  "redes-sociales": ["red 1", "red 2", "red 3"],
  "mision": "nueva-mision-empresa",
  "vision": "nueva-vision-empresa",
  "objetivos": ["objetivos"],
  "puntuacion": 4,
  "imagen": "nueva-url-imagen"
}
```

**Respues**:
``` json
{
  "message": "Empresa no encontrada"
}
```
Acompañado de un error `404`, el servidor nos muestra un mensaje el cuál nos indica que la empresa no ha sido encontrada en la base de datos, esto ya que no existe el id `id-empresa-3`.

Otro ejemplo:  **PUT** **/api/empresas/id-empresa-2**

**Datos** **enviados**:
``` json
{
  "numero-identificacion": "número-identificación",
  "certificado-registro": "certificado-registro",
  "licencia-comercial": "licencia-comercial",
  "direccion": ["direccion 1", "dirección 2"],
  "telefono": ["teléfono 1", "teléfono 2"],
  "email": ["email 1", "email 2"],
  "contrasena": "contraseña-empresa",
  "redes-sociales": [7466, "red 2", "red 3"],
  "mision": "nueva-mision-empresa",
  "vision": "nueva-vision-empresa",
  "objetivos": ["objetivos"],
  "puntuacion": 4,
  "imagen": "nueva-url-imagen"
}
```

**Respuesta**:
``` json
{
  "error": [
    {
      "propiedad": "nombre",
      "mensaje": "Required",
      "recibido": "undefined"
    },
    {
      "propiedad": "redes-sociales.0",
      "mensaje": "Expected string, received number",
      "recibido": "number"
    }
  ]
}
```

En esté caso tenemos un status `400`, ya que no se le paso la propiedad `nombre` como indica en el primer objeto del `json`, el segundo objeto nos muestra que redes sociales en la posición 0, esperaba un string y recibio un número.

Tomemos otro ejemplo:  **PUT** **/api/empresas/id-empresa-2**

**Datos** **enviados**:
``` json
{
  "id": "nuevo-id",
  "numero-identificacion": "número-identificación",
  "certificado-registro": "certificado-registro",
  "licencia-comercial": "licencia-comercial",
  "nombre": "nombre-empresa",
  "direccion": ["direccion 1", "dirección 2"],
  "telefono": ["teléfono 1", "teléfono 2"],
  "email": ["email 1", "email 2"],
  "contrasena": "contraseña-empresa",
  "redes-sociales": ["red 1", "red 2", "red 3"],
  "mision": "nueva-mision-empresa",
  "vision": "nueva-vision-empresa",
  "objetivos": ["objetivos"],
  "puntuacion": 4,
  "imagen": "nueva-url-imagen",
  "imagen-2": "otra imagen" 
}
```

**Respuesta**:
``` json
{
  "message": "Empresa actualizada con éxito"
}
```
En la respuesta que retorna el servidor, podemos ver un mensaje que nos indica que la empresa ha sido actualizada con exito. Tomar en cuenta que a pesar que le pasamos la propiedad `id` dentro de las propiedad, el servidor va a ignorarla junto a las otras propiedades que se le pasen y no sean necesarias para la actualización, en este caso el `id` no cambiará y no se agregará la propiedad `imagen-2`.

#### DELETE /api/empresas/:id
Cuándo hacemos una petición `DELETE` al servidor, necesitamos pasarle en la url el `id` para así indicarle que empresa vamos a eliminar de la BD.

Por ejemplo: **DELETE** **/api/empresas/id-empresa-3**

**Respuesta**:
``` json
{
  "message": "Empresa no encontrada"
}
```
En está ocasión, el servidor devuelve un status `404`, nos muestra un mensaje que nos indica que la empresa no existe dentro de la BD.

Tomemos este otro ejemplo: **DELETE** **/api/empresas/id-empresa-2**

**Respuesta**:
``` json
{
  "message": "Empresa eliminada con éxito"
}
```
En esté caso podemos ver que nos devuelve un status `200`, y nos indica que la empresa fue borrada con éxito.