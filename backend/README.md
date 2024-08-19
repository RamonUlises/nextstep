# Backend NextStep

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

Cada uno de estos endpoind corresponde a una `url` específica y un método http `(GET, POST, PUT, DELETE, entre otros)`, que define la acción que se realizará.

Las respuesta que de el servidor luego de la petición será en archivos `json`.

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
En este caso tenemos un parámetro el cual le nombramos `id`, este endpoint lo que hace es traernos la información de una empresa en específico, en este caso la empresa que le pertenece el `id`.

Tomemos esta petición como ejemplo: **GET** **/api/empresas/id-empresa-3**

**Respuesta**:
``` json
{
  "message": "Empresa no encontrada"
}
```

En este caso en la BD no tenemos un id llamado `id-empresa-3` por lo cuál el servidor muestra un status `404` y un mensaje que indica que la empresa no ha sido encontrada.

Ahora probemos con otra petición: **GET** **/api/empresas/id-empresa-2**

**Respuesta**:
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

En este caso, el id `id-empresa-2` si existe por lo cuál el servidor nos da un status `200` y muestra toda la información de esta empresa.

#### POST /api/empresas
Cuando le hacemos una petición `POST` al endpoint de empresas, esta necesita una serie de propiedades para crear un registro de la empresa en la BD.

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

En este caso obtenemos un status de `400` y un error, este nos muestra las propiedades que hacen falta, como es el caso de `objetivos` e `imagen`, y el mensaje que nos indica que es requerido, o como en el caso de `vision` que le pasamos un número y el servidor esperaba una cadena de texto.

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
El servidor nos da un status `200`, y un mensaje indicándonos que la empresa ha sido creada con éxito, cabe tomar en cuenta que `contrasena` antes de subirse a la base de datos es incriptada, además de eso no se le pasa una propiedad `id`, ya que este es creado en el servidor antes de subirse a la base de datos.

#### PUT /api/empresas/:id
En el caso de hacer actualizaciones a la empresas, se tiene que pasar en la url el parámetro `id` para indicarle a que empresa le haremos la actualización. Tener en cuenta que se le tiene que pasar un `json` con todas las propiedades, si no se la hará actualización a alguna propiedad enviarla como estaba antes.

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

**Respuesta**:
``` json
{
  "message": "Empresa no encontrada"
}
```
Acompañado de un error `404`, el servidor nos muestra un mensaje el cual nos indica que la empresa no ha sido encontrada en la base de datos, esto ya que no existe el id `id-empresa-3`.

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

En este caso tenemos un status `400`, ya que no se le pasó la propiedad `nombre` como indica en el primer objeto del `json`, el segundo objeto nos muestra que redes sociales en la posición 0 esperaba un string y recibió un número.

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
En la respuesta que retorna el servidor, podemos ver un mensaje que nos indica que la empresa ha sido actualizada con éxito. Tomar en cuenta que a pesar que le pasamos la propiedad `id` dentro de las propiedades, el servidor va a ignorarla junto a las otras propiedades que se le pasen y no sean necesarias para la actualización, en este caso el `id` no cambiará y no se agregará la propiedad `imagen-2`.

#### DELETE /api/empresas/:id
Cuando hacemos una petición `DELETE` al servidor, necesitamos pasarle en la url el `id` para así indicarle que empresa vamos a eliminar de la BD.

Por ejemplo: **DELETE** **/api/empresas/id-empresa-3**

**Respuesta**:
``` json
{
  "message": "Empresa no encontrada"
}
```
En esta ocasión, el servidor devuelve un status `404`, nos muestra un mensaje que nos indica que la empresa no existe dentro de la BD.

Tomemos este otro ejemplo: **DELETE** **/api/empresas/id-empresa-2**

**Respuesta**:
``` json
{
  "message": "Empresa eliminada con éxito"
}
```
En este caso podemos ver que nos devuelve un status `200`, y nos indica que la empresa fue borrada con éxito.

### Trabajadores

#### GET /api/trabajadores

Este endpoint nos trae toda la información de todos los trabajadores, en este caso tenemos 2 trbajadores registrados.

**Respuesta**:
```json
"data": [
  {
    "id": "id-trabajador-1",
    "nombres": "nombre-trabajador",
    "usuario": "usuario-21",
    "telefono": "telefono-usuario",
    "email": "email-trabajador",
    "contrasena": "contraseña",
    "redes-sociales": ["red 1"],
    "imagen": "url-imagen",
    "descripcion": "descripcion-trabajador",
    "educacion-primaria": "educacion-trab",
    "educacion-secundaria": "educacion-trab",
    "titulos": ["titulo-1"],
    "idiomas": ["idioma 1"],
    "certificados": ["certificado 1"],
    "referencias": ["referencias 1"],
    "habilidades": ["habilidades 1"],
    "puntos": 0,
    "puntuacion": 0,
    "saldo": 0,
  },
  {
    "id": "id-trabajador-2",
    "nombres": "nombre-trabajador",
    "usuario": "usuario-12",
    "telefono": "telefono-usuario",
    "email": "email-trabajador",
    "contrasena": "contraseña",
    "redes-sociales": ["red 1"],
    "imagen": "url-imagen",
    "descripcion": "descripcion-trabajador",
    "educacion-primaria": "educacion-trab",
    "educacion-secundaria": "educacion-trab",
    "titulos": ["titulo-1"],
    "idiomas": ["idioma 1"],
    "certificados": ["certificado 1"],
    "referencias": ["referencias 1"],
    "habilidades": ["habilidades 1"],
    "puntos": 0,
    "puntuacion": 0,
    "saldo": 0,
  }
]
```

#### GET /api/trabajadores/:id

Si hacemos una petición a esta url, nos traerá la información del trabajador que le posea el `id` que le pasamos al endopoint como parámetro.

Ejemplo: **GET /api/trabajadores/id-trabajador-3**

**Respuesta**:
```json
{
  "message": "Trabajador no encontrado"
}
```
Junto a un status `404`, nos muestra un mensaje que nos indica que el trabajador no existe, ya que en la BD no tenemos un registro con ese `id`.

Tomemos otro ejemplo: **GET /api/trabajadores/id-trabajador-2**

**Respues**:
```json
{
  "data": [
    {
      "id": "id-trabajador-2",
      "nombres": "nombre-trabajador",
      "usuario": "usuario-12",
      "telefono": "telefono-usuario",
      "email": "email-trabajador",
      "contrasena": "contraseña",
      "redes-sociales": ["red 1"],
      "imagen": "url-imagen",
      "descripcion": "descripcion-trabajador",
      "educacion-primaria": "educacion-trab",
      "educacion-secundaria": "educacion-trab",
      "titulos": ["titulo-1"],
      "idiomas": ["idioma 1"],
      "certificados": ["certificado 1"],
      "referencias": ["referencias 1"],
      "habilidades": ["habilidades 1"],
      "puntos": 0,
      "puntuacion": 0,
      "saldo": 0,
    }
  ]
}
```
El servidor encontró al trabajador, por lo tanto nos devuelve la información junto a un status `200`.

#### POST /api/trabajadores

Sí realizamon una petición `POST` a este endpoint, le indicamos al servidor que tiene que crear un nuevo trabajador, este necesita un conjunto de propiedades para poder completar la acción.

**Propiedades necesarias**:
```json
{
  "nombres": "nombre-trabajador",
  "usuario": "usuario",
  "telefono": "teléfono-usuario",
  "email": "email-trabajador",
  "contrasena": "contraseña",
  "redes-sociales": ["red 1"],
  "imagen": "url-img",
  "descripcion": "descripción-trabajador",
  "educacion-primaria": "educación-trab",
  "educacion-secundaria": "educación-trab",
  "titulos": ["títulos"],
  "idiomas": ["idioma 1"],
  "certificados": ["certificado 1"],
  "referencias": ["referencias 1"],
  "habilidades": ["habilidades 1"]
}
```

Sí intentamos enviarle una petición y no le enviamos todos los datos necesarios este nos mostrara un status `400` al igual que si le enviamos tipos de datos diferentes a los que necesita.

**Mensaje de error**:

```json
{
  "error": [
    {
      "propiedad": "imagen",
      "mensaje": "Expected string, received number",
      "recibido": "number"
    },
    {
      "propiedad": "titulos",
      "mensaje": "Required",
      "recibido": "undefined"
    }
  ]
}
```

También hay que tomar en cuenta que la BD no puede guardar propiedades como `usuario` o `email` duplicados por lo que esto nos mostrará algunos errores.

**Error 1**:
```json
{
  "message": "Ya existe un trabajador registrado con este usuario"
}
```
**Error 2**:
```json
{
  "message": "Ya existe un trabajador registrado con este email"
}
```

Ejemplo: **POST /api/trabajadores**

**Datos enviados**
``` json
{
  "nombres": "nombre-trabajador",
  "usuario": "usuario",
  "telefono": "teléfono-usuario",
  "email": "email-trabajador",
  "contrasena": "contraseña",
  "redes-sociales": ["red 1"],
  "imagen": "url-img",
  "descripcion": "descripción-trabajador",
  "educacion-primaria": "educación-trab",
  "educacion-secundaria": "educación-trab",
  "titulos": ["títulos"],
  "idiomas": ["idioma 1"],
  "certificados": ["certificado 1"],
  "referencias": ["referencias 1"],
  "habilidades": ["habilidades 1"]
}
```
**Respuesta**:
``` json
{
  "message": "Trabajador creado con éxito"
}
```
El endpoint nos devuelve un status `200`, con un mensaje indicándonos que el trabajador ha sido creado con exito, el campo `contrasena` antes de subirse a la BD es incriptado, el idientificador `id` es creado por el servidor antes de enviarse.

#### PUT /api/trabajadores/:id

Al endpoint con la petición `PUT`, se le tien que pasar como parámetro el `id` del trabajador al cual le haremos la actualización, este también necesitará toda las propiedades.

Si el servidor no encuetra el trabajador con el `id` que le pasamos como parámetro retornara un status `404` y nos mostrará un mensaje así:
```json
{
  "message": "Trabajador no encontrado"
}
```

Tomar en cuenta que si no le pasamos todas los campos necesarios y sus tipos, el servidor nos devolverá errores como en la petición `POST`, también que no podemos pasarle propiedades como `usuario` y `email` que ya esten registrados en la BD, o si intentamos registrar datos no requeridos este las ignorará.

Tomemos este ejemplo: **PUT api/trabajadores/id-usuario-1**

**Datos enviados**:
``` json
{
  "nombres": "nombre-trabajador",
  "usuario": "usuario",
  "telefono": "teléfono-usuario",
  "email": "email-trabajador",
  "contrasena": "contraseña",
  "redes-sociales": ["red 1"],
  "imagen": "url-img",
  "descripcion": "actualizar-descripción-trabajador",
  "educacion-primaria": "educación-trab",
  "educacion-secundaria": "educación-trab",
  "titulos": ["títulos"],
  "idiomas": ["idioma 1"],
  "certificados": ["certificado 1"],
  "referencias": ["referencias 1"],
  "habilidades": ["habilidades 1"],
  "talla": 364, // <-- ignorada
}
```
**Respuesta**:
```json
{
  "message": "Trabajador actualizado con éxito"
}
```

#### DELETE /api/trabajadores/:id

Al momento de realizar una petición `DELETE`, necesitamos pasarle el `id` del trabajador como parámetro, para indicarle cual registro borrar, si este no es encontrado, el servidor nos devolverá un status `404` y un mensaje como este:

```json
{
  "message": "Trabajador no encontrado"
}
```

Ejemplo: **DELETE /api/trabajadores/id-trabajador-2**

**Respuesta**:
```json
{
  "message": "Trabajador eliminado con éxito"
}
```
En este caso podemos ver que nos devuelve un status 200, y nos indica que el trabajador fue borrada con éxito.

### Trabajos

#### GET /api/trabajos

Este endpoint obtiene toda la información de todos los trabajos registrados.

**Respuesta**:
```json
"data": [
  {
    "id": "id-trabajo-1",
    "empresa": "id-empresa-1",
    "descripcion": "descripcion-trabajo",
    "requerimientos": ["requerimiento 1"],
    "fecha-publicacion": "2024-08-17T00:00:00.000Z",
    "fecha-inicio": "2024-09-01T00:00:00.000Z",
    "fecha-expiracion": "2024-12-31T00:00:00.000Z",
    "contrato": "tipo-de-contrato",
    "presupuesto": 1000,
    "puntos": 0,
    "etiquetas": ["etiqueta 1"],
    "departamentos": ["departamento 1", "departamento 2"]
  },
  {
    "id": "id-trabajo-2",
    "empresa": "id-empresa-2",
    "descripcion": "descripcion-trabajo",
    "requerimientos": ["requerimiento 2"],
    "fecha-publicacion": "2024-08-18T00:00:00.000Z",
    "fecha-inicio": "2024-09-15T00:00:00.000Z",
    "fecha-expiracion": "2024-12-31T00:00:00.000Z",
    "contrato": "tipo-de-contrato",
    "presupuesto": 2000,
    "puntos": 10,
    "etiquetas": ["etiqueta 2"],
    "departamentos": ["departamento 1", "departamento 3"]
  }
]
```

#### GET /api/trabajos/:id
Este endpoint obtiene la información de un trabajo específico basado en el `id` proporcionado.

Ejemplo: **GET /api/trabajos/id-trabajo-3**

**Respuesta**:
```json
{
  "message": "Trabajo no encontrado"
}
```
Status `404`, indica que el trabajo no existe en la base de datos.

Ejemplo: **GET /api/trabajos/id-trabajo-2**

**Respuesta**:
```json
{
  "data": {
    "id": "id-trabajo-2",
    "empresa": "id-empresa-2",
    "descripcion": "descripcion-trabajo",
    "requerimientos": ["requerimiento 2"],
    "fecha-publicacion": "2024-08-18T00:00:00.000Z",
    "fecha-inicio": "2024-09-15T00:00:00.000Z",
    "fecha-expiracion": "2024-12-31T00:00:00.000Z",
    "contrato": "tipo-de-contrato",
    "presupuesto": 2000,
    "puntos": 10,
    "etiquetas": ["etiqueta 2"],
    "departamentos": ["departamento 1", "departamento 3"]
  }
}
```
El servidor devuelve la información del trabajo con status `200`.

## POST /api/trabajos
Este endpoint crea un nuevo trabajo en la base de datos.

**Propiedades necesarias**:
```json
{
  "empresa": "id-empresa-1",
  "descripcion": "descripcion-trabajo",
  "requerimientos": ["requerimiento 1"],
  "fecha-publicacion": "2024-08-17T00:00:00.000Z",
  "fecha-inicio": "2024-09-01T00:00:00.000Z",
  "fecha-expiracion": "2024-12-31T00:00:00.000Z",
  "contrato": "tipo-de-contrato",
  "presupuesto": 1000,
  "puntos": 0,
  "etiquetas": ["etiqueta 1"],
  "departamentos": ["departamento 1", "departamento 2"]
}
```

**Validaciones**:
- Si faltan campos o se proporcionan tipos de datos incorrectos, se devuelve un status `400` con detalles del error.

**Mensaje de error**:

```json
{
  "error": [
    {
      "propiedad": "presupuesto",
      "mensaje": "Expected number, received string",
      "recibido": "string"
    },
    {
      "propiedad": "descripcion",
      "mensaje": "Required",
      "recibido": "undefined"
    }
  ]
}
```

Ejemplo: **POST /api/trabajos**

**Datos enviados**:
```json
{
  "empresa": "id-empresa-1",
  "descripcion": "descripcion-trabajo",
  "requerimientos": ["requerimiento 1"],
  "fecha-publicacion": "2024-08-17T00:00:00.000Z",
  "fecha-inicio": "2024-09-01T00:00:00.000Z",
  "fecha-expiracion": "2024-12-31T00:00:00.000Z",
  "contrato": "tipo-de-contrato",
  "presupuesto": 1000,
  "puntos": 0,
  "etiquetas": ["etiqueta 1"],
  "departamentos": ["departamento 1", "departamento 2"]
}
```

**Respuesta**:
```json
{
  "message": "Trabajo creado con éxito"
}
```
Status `200`, el trabajo ha sido creado exitosamente.

#### PUT /api/trabajos/:id

Este endpoint actualiza la información de un trabajo existente basado en el `id` proporcionado.

**Validaciones**:
- Requiere todas las propiedades necesarias.
- Ignora campos adicionales no requeridos.

Ejemplo: **PUT /api/trabajos/id-trabajo-1**

**Datos enviados**:
```json
{
  "empresa": "id-empresa-1",
  "descripcion": "actualizar-descripcion-trabajo",
  "requerimientos": ["requerimiento actualizado"],
  "fecha-publicacion": "2024-08-17T00:00:00.000Z",
  "fecha-inicio": "2024-09-01T00:00:00.000Z",
  "fecha-expiracion": "2024-12-31T00:00:00.000Z",
  "contrato": "tipo-de-contrato",
  "presupuesto": 1200,
  "puntos": 5,
  "etiquetas": ["etiqueta actualizada"],
  "departamentos": ["departamento 1", "departamento 3"]
}
```

**Respuesta**:
```json
{
  "message": "Trabajo actualizado con éxito"
}
```
Status `200`, el trabajo ha sido actualizado exitosamente.

#### DELETE /api/trabajos/:id
Este endpoint elimina un trabajo basado en el `id` proporcionado.

Ejemplo: **DELETE /api/trabajos/id-trabajo-2**

**Respuesta**:
```json
{
  "message": "Trabajo eliminado con éxito"
}
```
Status `200`, el trabajo fue eliminado con éxito