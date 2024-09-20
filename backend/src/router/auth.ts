import auth from '@/controllers/auth';
import { Router } from 'express';

const router: Router = Router();

router.post('/login', (req, res) => {
  void auth.login(req, res);
});

router.post('/access-admin', (req, res) => {
  auth.accessAdmin(req, res);
});

router.post('/recover-password', (req, res) => {
  void auth.recoverPassword(req, res);
});

export default router;