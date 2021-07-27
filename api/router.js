import express from 'express';

import { get, add, update, remove } from './controllers.js';

export const router = express.Router();

router.get('/:for', get);
router.post('/', add);
router.put('/:id', update);
router.delete('/:id', remove);
