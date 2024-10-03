import solicitudes from '@/controllers/solicitudes';
import { Router } from 'express';

const router = Router();

router.get('/:id', (req, res) => {
  void solicitudes.obtenerSolicitud(req, res);
});

router.get('/empresa/:id', (req, res) => {
  void solicitudes.obtenerSolicitudEmpresa(req, res);
});

router.get('/colaborador/:id', (req, res) => {
  void solicitudes.obtenerSolicitudesColaborador(req, res);
});

router.post('/', (req, res) => {
  void solicitudes.crearSolicitud(req, res);
});

router.put('/estado/:id', (req, res) => {
  void solicitudes.actualizarEstadoSolicitud(req, res);
});

router.get('/calificaciones/:usuario', (req, res) => {
  void solicitudes.obtenerSolicitudesCalificar(req, res);
});

export default router;