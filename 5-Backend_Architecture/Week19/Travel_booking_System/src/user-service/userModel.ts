import mongoose, { Schema, Document } from "mongoose";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

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
