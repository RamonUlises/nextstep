import { Request, Response } from 'express';

export const verifyAuth = (
  req: Request,
  res: Response,
): boolean => {
  const authHeader: string = req.headers.authorization ?? '';

  if(authHeader.startsWith('Basic ')){
    const basicCredentials: string = authHeader.split(' ')[1];
    const credentials: string = Buffer.from(basicCredentials, 'base64').toString('utf-8');
    const [userAuth, passwordAuth] = credentials.split(':');

    const user: string = process.env.USER_AUTH ?? '';
    const password: string = process.env.PASSWORD_AUTH ?? '';

    if(userAuth === user && passwordAuth === password){
      return true;
    }
  }

  res.setHeader('WWW-Authenticate', 'Basic realm="401"');
  res.status(401).json({ message: 'Credenciales incorrectas' });
  return false;
};
