import express from 'express';

import { get, add, remove, contact } from '../controllers/index.js';

export const router = express.Router();

router.get('/:for', get);
router.post('/', add);
router.delete('/:id', remove);
router.post('/contact', contact);
