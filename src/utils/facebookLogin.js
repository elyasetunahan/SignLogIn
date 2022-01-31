import { signInWithPopup } from "firebase/auth";

import { auth, facebookProvider } from "../firebase";

const fbLogin = async () => {
  const { user } = await signInWithPopup(auth, facebookProvider);
  return JSON.parse(JSON.stringify(user));
};


export default fbLogin