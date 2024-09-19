const createOnePet = (req, res, next) => {
    const { name, species } = req.body;
    if (!name || !species) {
        res.status(400).send("Name and Species are required");
        return;
    }
    next();
};
const updateOnePetHappiness = (req, res, next) => {
    if (!req.body.happiness) {
        res.status(404).send("Happiness is required");
        return;
    }
    next();
};
const auth = (req, res, next) => {
    if (req.headers.authorization !== "Bearer testPassword123") {
        res.status(401).send("Unauthorized");
        return;
    }
    next();
};
export default { createOnePet, updateOnePetHappiness, auth };
