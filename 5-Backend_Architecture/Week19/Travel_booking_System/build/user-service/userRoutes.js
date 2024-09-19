import { Router } from "express";
const router = Router();
let users = [];
router.post("/", (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name: name,
        email: email,
    };
    users.push(newUser);
    return res.status(201).send(newUser);
});
router.get("/", (req, res) => {
    res.status(200).send(users);
});
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
});
router.put("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
        return res.status(404).send({ message: "User not found" });
    }
    const { name, email } = req.body;
    users[userIndex] = { id: userId, name, email };
    res.status(200).send(users[userIndex]);
});
router.delete("/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter((u) => u.id !== userId);
    res.status(204).send();
});
export default router;
