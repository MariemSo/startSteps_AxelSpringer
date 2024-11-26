import express from 'express';

import { configs } from './config/env.js';
import { connectDB } from './config/dataBase.js';
import router from './routes.js';

const app = express();

app.use(express.json());

app.use('/api', router);
console.log(configs);
console.log(configs.NODE_ENV);
if (configs.NODE_ENV !== 'test') {
  connectDB().then(() => {
    app.listen(configs.PORT, () => {
      console.log(`Server running on http://localhost:${configs.PORT}`);
    });
  });
}

export default app;
