import express from 'express';

import { get, add, remove } from './controllers.js';

export const router = express.Router();

router.get('/:for', get);
router.post('/', add);
router.delete('/:id', remove);
