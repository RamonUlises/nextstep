import { preguntar } from '@/controllers/chatbot';
import { Router } from 'express';

const router = Router();

router.post('/preguntar', (req, res) => {
  void preguntar(req, res);
});

export default router;