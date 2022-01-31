import { signInWithPopup } from "firebase/auth";

import { auth, googleProvider } from "../firebase";

const googleLogin = async () => {
  const { user } = await signInWithPopup(auth, googleProvider);
  return JSON.parse(JSON.stringify(user));
};


export default googleLogin