/* eslint-disable */

import { Router } from 'express';
import newsValidationSchemas from './validation.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import authMiddleware from '../../middleware/auth.js';
import newsController from './controllers.js';
const router = Router();

router.get(
  '/latest',
  validateRequest(newsValidationSchemas.latestNews),
  newsController.getLatestNews,
);

router.get(
  '/headlines',
  authMiddleware,
  validateRequest(newsValidationSchemas.headlines),
  newsController.getTopHeadlines,
);

router.get(
  '/search',
  validateRequest(newsValidationSchemas.searchNews),
  newsController.searchNews,
);

export default router;
