import { Router } from 'express';
import DB from '../controllers/database';
import products from './products';

const router = Router();

router.get('/api', DB.testConnection);
router.use("/products", products)


export default router;
