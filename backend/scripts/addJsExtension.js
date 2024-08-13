import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtén la ruta actual del archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cambia la ruta al directorio de salida
const directory = path.join(__dirname, '../dist');

function addJsExtensionToImports(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      addJsExtensionToImports(fullPath);
    } else if (file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Reemplaza los imports que no provienen de node_modules
      content = content.replace(
        /(from\s+['"])(\.\/.*?)(['"])/g, 
        '$1$2.js$3'
      );
      content = content.replace(
        /(import\s+['"])(\.\/.*?)(['"])/g, 
        '$1$2.js$3'
      );

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  });
}

addJsExtensionToImports(directory);
