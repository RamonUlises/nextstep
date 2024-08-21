export const manejarError = (res, error) => {
    const response = [];
    error.issues.forEach((issue) => {
        response.push({
            propiedad: issue.path.join('.'),
            mensaje: issue.message,
            recibido: issue.received,
        });
    });
    res.status(400).json({ error: response });
};
