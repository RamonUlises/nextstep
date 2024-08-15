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

- Para iniciar, ejecute el siguiente comando:

``` bash
pnpm start
```

Para escuchar los cambios usamos el comando experimental **--watch** de node junto a la dependencia y tcx

## Tecnologías

- Node js
- TypeScript
- Express
- JWT (autentificación)
- Mongo DB (base de datos)

## Documentación

### Configuración del proyecto

Usamos ESLint esta es una herramienta de análisis de código estático que se utiliza para identificar y reportar patrones encontrados en el código ECMAScript/JavaScript. En este proyecto, ESLint se configura para trabajar con TypeScript y asegurar que el código siga las mejores prácticas y convenciones de estilo.

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
- Cuando se hace una petición, esta pasa por dos middleware, uno de ellos busca la ruta a la que se le hizo la petición, si está no existe muestra un error 404 que indica que la url no existe, si existe se activa el segundo middleware que verifica que dentro de los headers de la petición venga las claves de autentificación, no vienen o son incorrectas muestra un error de 401 que indica que no está autorizado.

### Organización de carpetas

- **node_modules/**: Contiene las dependencias del proyecto instaladas a través de pnpm.
- **dist/**: Contiene los archivos compilados y listos para producción.
- **scripts/**: Contiene scripts necesarios para la build que realiza tsc y tsc-aleas
- **src/**:
  - **controllers/**: Contiene los controladores que manejan la lógica de negocio y las interacciones con la base de datos.
  - **database/**: Contiene la conexión a la base de datos en Mongo Atlas verifica la IP para agregarla a las IP permitidas de Mongo.
    - **request/**: Contiene las peticiones http a la base de datos en Mongo Atlas.
  - **lib/**: Contiene scripts del proyecto que automatizan los procesos que realiza el servidor cuando hace la autentificación, peticines, errores, entre otras.
  - **router/**: Contiene las definiciones de las rutas de la API.
  - **schemas/**: Contiene los esquemas creados para la base de datos, las propiedades que tendra cada una de las entidades y los tipos de ellas.
  - **types/**: Contiene los tipos, interfaces, enums que usamos para definir los tipos de TypeScript.

