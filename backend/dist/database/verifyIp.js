import dotenv from 'dotenv';
import axios from 'axios';
import { exec } from 'node:child_process';
import util from 'node:util';
import connection from './connection.js';
const execPromise = util.promisify(exec);
dotenv.config();
async function getPublicIP() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
    }
    catch (error) {
        console.log('Error en la conexion', error);
        return '';
    }
}
async function addIPToWhiteList(ip) {
    try {
        const apiKey = process.env.ATLAS_API_KEY ?? '';
        const apiUser = process.env.ATLAS_API_USER ?? '';
        const groupId = process.env.ATLAS_GROUP_ID ?? '';
        if (!apiKey || !apiUser || !groupId) {
            throw new Error('Las variables de entorno no están configuradas');
        }
        const url = `https://cloud.mongodb.com/api/atlas/v1.0/groups/${groupId}/accessList`;
        const curlCommand = `curl -u "${apiUser}:${apiKey}" --digest \
    --header "Content-Type: application/json" \
    --request POST \
    --data '[{"ipAddress": "${ip}"}]' \
    "${url}"`;
        console.log('Agregando IP a la whitelist de mongo atlas');
        await execPromise(curlCommand);
        console.log('IP agregada a la whitelist de mongo atlas');
        connection();
    }
    catch (error) {
        console.log(error);
    }
}
await addIPToWhiteList(await getPublicIP());
