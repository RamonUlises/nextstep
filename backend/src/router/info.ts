import info from '@/controllers/info';
import { Router } from 'express';

const router: Router = Router();

router.get('/:id', (req, res) => {
  void info.obtenerInfo(req, res);
});

export default router;