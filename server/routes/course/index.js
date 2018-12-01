import express from 'express';

const router = express.Router();

router.post('/update', require('./update'));

export default router;