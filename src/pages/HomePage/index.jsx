import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { signOut } from "firebase/auth";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unSubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    });
    return () => {
      unSubscribed();
    };
  }, [navigate]);
  return (
    <>
      <div style={{ textAlign: "center" , marginBottom:"5px" }}>Hoşgeldin, {user?.displayName}</div>
      <Button
        type="text"
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default HomePage;
