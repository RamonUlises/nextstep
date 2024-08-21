import crypto from 'node:crypto';
import dotenv from 'dotenv';
dotenv.config(); // Cargar variables de entorno desde el archivo .env
const algorithm = 'aes-256-gcm';
const key = Buffer.from(process.env.ENCRYPTION_KEY ?? '', 'hex'); // Convertir la clave desde hexadecimal a un Buffer
// Función para encriptar
export function encrypt(text) {
    try {
        const iv = crypto.randomBytes(16); // IV de 16 bytes
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        const authTag = cipher.getAuthTag().toString('hex'); // Obtener el Auth Tag
        return `${iv.toString('hex')}:${authTag}:${encrypted}`;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
// Función para desencriptar
export function decrypt(encryptedText) {
    try {
        const parts = encryptedText.split(':');
        const iv = Buffer.from(parts.shift() ?? '', 'hex');
        const authTag = Buffer.from(parts.shift() ?? '', 'hex');
        const encrypted = parts.join(':');
        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        decipher.setAuthTag(authTag);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
