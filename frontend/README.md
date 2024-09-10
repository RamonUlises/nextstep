# Frontend NextStep

## Instalación
Para instalar las dependencias necesarias, ejecute el siguiente comando:
``` bash
npm install
```
## Uso

- Para levantar el servidor, ejecute el siguiente comando:
``` bash
 npm run dev
```
## Tecnologías

- React
- Vite (enpaquetador)
- TypeScript

## Documentación

### Configuración del proyecto

Usamos ESLint, es una herramienta de análisis de código estático que se utiliza para identificar y reportar patrones encontrados en el código ECMAScript/JavaScript. En este proyecto, ESLint se configura para trabajar con TypeScript y asegurar que el código siga las mejores prácticas y convenciones de estilo.

El archivo de configuración de ESLint `eslint.config.js` incluye reglas específicas para TypeScript y se integra con el archivo `.prettierrc.json` de Prettier para formatear el código automáticamente.

### Organización de carpetas

- **public/**: Contiene el logo de la pagina.
- **src/**: Contiene toda la logica de la aplicacion.
- **assets/**: Contiene todas las imagenes de la aplicacion.
- **components/**: contiene todos los componentes que se usan en el desarrollo de la aplicacion.
- **icons/**: Contiene todos los iconos que se utilizan en la aplicacion.
- **lib/**: Contiene las peticiones al servidor.
- **pages/**: Contiene todas las paginas de la aplicacion. 
- **types/**: Contiene los types, interfaces, enums que usamos para definir los tipos TypeScript.
  