import mongoose, { Schema } from "mongoose";
// let users: User[] = [];
const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
});
const User = mongoose.model("User", userSchema);
export default User;
export { userSchema };
