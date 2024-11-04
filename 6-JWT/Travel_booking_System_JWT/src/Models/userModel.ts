import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  id: number;
  name: string;
  email: string;
  password: string;
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
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", (next) => {
  console.log("saving data to database");
  next();
});
const User = mongoose.model<IUser>("User", userSchema);

export default User;
export { userSchema };
