import express from 'express';

const router = express.Router();
router.post('/add', require('./add'));
router.post('/auth', require('./auth'));

export default router;