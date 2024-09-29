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

router.put('/imagen-2/:id', (req, res) => {
  void empresas.actualizarImagen2(req, res);
});

router.put('/contrasena/:id', (req, res) => {
  void empresas.cambiarContrasena(req, res);
});

router.put('/contrasena-perdida/:id', (req, res) => {
  void empresas.cambiarContrasenaPerdida(req, res);
});

router.put('/subir-nivel/:id', (req, res) => {
  void empresas.subirNivel(req, res);
});

export default router;