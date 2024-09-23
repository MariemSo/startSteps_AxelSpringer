import User from "./userModel.js";
const getAll = async (req, res) => {
    const users = await User.find();
    res.status(200).send(users);
};
const getOne = async (req, res) => {
    const userId = parseInt(req.params.id);
    const user = await User.findById(userId);
    // const user = User.find((u) => u.id === userId);
    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
};
const create = async (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({
        name,
        email,
    });
    // const newUser = {
    //   id: User.length + 1,
    //   name,
    //   email,
    // };
    // users.push(newUser);
    await newUser.save();
    return res.status(201).send(newUser);
};
const update = async (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
    if (user) {
        return res.status(404).send({ message: "User not found" });
    }
    // const userIndex = users.findIndex((u) => u.id === userId);
    // if (userIndex === -1) {
    //   return res.status(404).send({ message: "User not found" });
    // }
    // const { name, email } = req.body;
    // users[userIndex] = { id: userId, name, email };
    // res.status(200).send(users[userIndex]);
};
const remove = async (req, res) => {
    const userId = parseInt(req.params.id);
    const user = await User.findByIdAndDelete(userId);
    // const userIndex = users.findIndex((u) => u.id === userId);
    // users.splice(userIndex, 1);
    if (user) {
        return res.status(404).send({ message: "User not found" });
    }
    res.status(204).send();
};
export default { getOne, getAll, update, create, remove };
