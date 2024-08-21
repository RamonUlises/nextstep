export const verifyAuth = (req, res) => {
    const authHeader = req.headers.authorization ?? '';
    if (authHeader.startsWith('Basic ')) {
        const basicCredentials = authHeader.split(' ')[1];
        const credentials = Buffer.from(basicCredentials, 'base64').toString('utf-8');
        const [userAuth, passwordAuth] = credentials.split(':');
        const user = process.env.USER_AUTH ?? '';
        const password = process.env.PASSWORD_AUTH ?? '';
        if (userAuth === user && passwordAuth === password) {
            return true;
        }
    }
    res.setHeader('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).json({ message: 'Credenciales incorrectas' });
    return false;
};
