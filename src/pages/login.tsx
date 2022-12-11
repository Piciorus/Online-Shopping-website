import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import profile from "../image/profile.png";
import "../index.css";
import { useNavigate } from "react-router-dom";
import ShopPage from "./Shophomepage";

const Login: React.FC = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      setError("");
    } catch (error) {
      console.log("Login fails!");
      setError("Invalid Username or Password");
    }
  };
  return (
    <>
      {user && (
        <>
          <ShopPage />
        </>
      )}
      {!user ? (
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <div>
                <div>
                  <input
                    ref={emailRef}
                    type="text"
                    placeholder="email"
                    className="name"
                  />
                </div>
                <div className="second-input">
                  <input
                    ref={passwordRef}
                    type="password"
                    placeholder="password"
                    className="name"
                  />
                </div>
                {error ? <div className="error">{error}</div> : null}
                <button className="button" onClick={signIn}>
                  Login
                </button>
                <div>
                  <Button variant="link">Forgot password</Button>
                  <a className="mt-1">Or</a>
                  <Button onClick={() => navigate("/register")} variant="link">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2></h2>
      )}
    </>
  );
};
export default Login;
