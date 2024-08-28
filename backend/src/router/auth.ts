import auth from '@/controllers/auth';
import { Router } from 'express';

const router: Router = Router();

router.post('/login', (req, res) => {
  void auth.login(req, res);
});

export default router;