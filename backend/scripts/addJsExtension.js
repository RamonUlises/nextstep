import { readdirSync, readFileSync, writeFileSync, lstatSync} from 'node:fs';
import { join } from 'node:path';

const directoryPath = join(process.cwd(), 'dist');

function addJsExtension(filePath) {
    const content = readFileSync(filePath, 'utf8');
    const updateContent = content.replace(/(import .* from ['"])(\.\/.*)(['"])/g, '$1$2.js$3');
    writeFileSync(filePath, updateContent, 'utf8');
}

function proccessDirectory(directoryPath) {
    readdirSync(directoryPath).forEach(file => {
        const fullPath = join(directoryPath, file);
        if(lstatSync(fullPath).isDirectory()) {
            proccessDirectory(fullPath);
        } else if(file.endsWith('.js')) {
            addJsExtension(fullPath);
        }
    })
}

proccessDirectory(directoryPath);