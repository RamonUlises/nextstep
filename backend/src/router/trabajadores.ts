import trabajadores from '@/controllers/trabajadores';
import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
  void trabajadores.obtenerTrabajadores(req, res);
});

router.get('/:id', (req, res) => {
  void trabajadores.obtenerTrabajador(req, res);
});

router.post('/', (req, res) => {
  void trabajadores.crearTrabajador(req, res);
});

router.put('/:id', (req, res) => {
  void trabajadores.actualizarTrabajador(req, res);
});

router.delete('/:id', (req, res) => {
  void trabajadores.eliminarTrabajador(req, res);
});

export default router;