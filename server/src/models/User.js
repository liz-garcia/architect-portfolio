import mongoose from "mongoose";
import validateAllowedFields from "../utils/validateAllowedFields.js";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  authCode: { type: String, required: true },
});

const User = mongoose.model("users", userSchema);

export const validateUser = (userObject) => {
  const errorList = [];
  const allowedKeys = ["username", "password", "authCode"];
  const auth = process.env.AUTH_CODE;

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  if (userObject.username == null) {
    errorList.push("username is a required field");
  }

  if (userObject.password == null) {
    errorList.push("password is a required field");
  }

  if (userObject.authCode == null) {
    errorList.push("authorization code is a required field");
  }

  if (userObject.authCode !== auth) {
    errorList.push("authorization code not valid");
  }

  return errorList;
};

export default User;
