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

router.put('/contrasena-perdida/:id', (req, res) => {
  void trabajadores.cambiarContrasenaPerdida(req, res);
});

router.put('/imagen-2/:id', (req, res) => {
  void trabajadores.actualizarImagen2(req, res);
});

router.put('/contrasena/:id', (req, res) => {
  void trabajadores.cambiarContrasena(req, res);
});

export default router;