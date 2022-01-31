import { signInWithPopup } from "firebase/auth";

import { auth, githubProvider } from "../firebase";

const githubLogin = async () => {
  const { user } = await signInWithPopup(auth, githubProvider);
  return JSON.parse(JSON.stringify(user));
};


export default githubLogin