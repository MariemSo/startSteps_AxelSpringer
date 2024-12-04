/* eslint-disable */

import { Router } from 'express';
import newsValidationSchemas from './validation.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import newsController from './controllers.js';
const router = Router();

router.get(
  '/latest',
  validateRequest(newsValidationSchemas.latestNews),
  newsController.getLatestNews,
);
router.get(
  '/search',
  validateRequest(newsValidationSchemas.searchNews),
  newsController.searchNews,
);

export default router;
