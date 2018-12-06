import express from 'express';

const router = express.Router();

router.post('/update', require('./update'));
router.post('/get', require('./get'));

export default router;