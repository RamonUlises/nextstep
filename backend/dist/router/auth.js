import auth from '../controllers/auth.js';
import { Router } from 'express';
const router = Router();
router.post('/login', (req, res) => {
    void auth.login(req, res);
});
export default router;
