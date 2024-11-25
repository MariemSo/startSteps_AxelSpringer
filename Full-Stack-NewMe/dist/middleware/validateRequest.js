export const validateRequest = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    error ? res.status(400).send({ error: error.message }) : next();
};
