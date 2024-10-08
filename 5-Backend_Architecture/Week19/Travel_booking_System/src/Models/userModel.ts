import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  id: number;
  name: string;
  email: string;
}

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

const User = mongoose.model<IUser>("User", userSchema);

export default User;
