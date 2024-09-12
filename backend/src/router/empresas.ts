import empresas from '@/controllers/empresas';
import { Router } from 'express';

const router: Router = Router();

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

router.put('/aceptar/:id', (req, res) => {
  void empresas.aceptarEmpresa(req, res);
});

export default router;