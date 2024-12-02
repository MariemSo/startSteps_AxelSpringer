import { Router } from 'express';
import newsValidationSchemas from './validation.js';
import { validateRequest } from 'src/middleware/validateRequest.js';
import newsController from './controllers.js';
const router = Router();

router.get(
  'latest',
  validateRequest(newsValidationSchemas.latestNews),
  newsController.getLatestNews,
);

export default router;
