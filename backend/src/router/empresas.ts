import empresas from '@/controllers/empresas';
import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
  void empresas.obtenerEmpresas(req, res);
});

router.post('/', (req, res) => {
  void empresas.crearEmpresa(req, res);
});

export default router;