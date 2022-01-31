import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

const loginWithEmail = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return JSON.parse(JSON.stringify(user));
};

const registerWithEmail = async ({ email, password, username }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, {
    displayName: username,
  });
  return JSON.parse(JSON.stringify(user));
};

const emailLogin =  { loginWithEmail, registerWithEmail };
export default emailLogin;
