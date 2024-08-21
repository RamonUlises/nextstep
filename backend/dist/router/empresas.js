import empresas from '../controllers/empresas.js';
import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    void empresas.obtenerEmpresas(req, res);
});
router.get('/:id', (req, res) => {
    void empresas.obtenerEmpresa(req, res);
});
router.post('/', (req, res) => {
    void empresas.crearEmpresa(req, res);
});
router.put('/:id', (req, res) => {
    void empresas.actualizarEmpresa(req, res);
});
router.delete('/:id', (req, res) => {
    void empresas.eliminarEmpresa(req, res);
});
export default router;
