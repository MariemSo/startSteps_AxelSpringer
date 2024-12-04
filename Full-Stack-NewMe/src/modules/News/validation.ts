/* eslint-disable */
import Joi from 'joi';
const latestNews = {
  query: Joi.object({
    q: Joi.string().optional(),
    limit: Joi.number().integer().min(1).max(100).default(5),
    sortBy: Joi.string()
      .valid('relevancy', 'popularity', 'publishedAt')
      .default('publishedAt'),
  }),
};
const searchNews = {
  query: Joi.object({
    q: Joi.string().required(), // Make the query mandatory
    limit: Joi.number().integer().min(1).max(100).default(10),
    sortBy: Joi.string()
      .valid('relevancy', 'popularity', 'publishedAt')
      .default('relevancy'),
  }),
};

export default { latestNews, searchNews };
