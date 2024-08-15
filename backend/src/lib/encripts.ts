import crypto from 'node:crypto';

const algorithm = 'aes-256-gcm';
const key = crypto.randomBytes(32); // Clave de 32 bytes para AES-256

// Función para encriptar
export function encrypt(text: string):string {
  const iv = crypto.randomBytes(16); // IV de 16 bytes
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag().toString('hex'); // Obtener el Auth Tag

  // Retornar el IV, el Auth Tag y el texto encriptado
  return iv.toString('hex') + ':' + authTag + ':' + encrypted;
}

// Función para desencriptar
export function decrypt(encryptedText: string) {
  const parts = encryptedText.split(':');
  const iv = Buffer.from(parts.shift() ?? '', 'hex'); // Obtener el IV
  const authTag = Buffer.from(parts.shift() ?? '', 'hex'); // Obtener el Auth Tag
  const encrypted = parts.join(':'); // El resto es el texto encriptado

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  decipher.setAuthTag(authTag); // Establecer el Auth Tag para la desencriptación

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted; // Devolver el texto desencriptado
}
