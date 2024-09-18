import trabajos from '@/controllers/trabajos';
import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
  void trabajos.obtenerTrabajos(req, res);
});

router.get('/:id', (req, res) => {
  void trabajos.obtenerTrabajo(req, res);
});

router.post('/', (req, res) => {
  void trabajos.crearTrabajo(req, res);
});

router.put('/:id', (req, res) => {
  void trabajos.actualizarTrabajo(req, res);
});

router.delete('/:id', (req, res) => {
  void trabajos.eliminarTrabajo(req, res);
});

router.get('/empresa/:empresa', (req, res) => {
  void trabajos.obtenerTrabajosPorEmpresa(req, res);
});

export default router;