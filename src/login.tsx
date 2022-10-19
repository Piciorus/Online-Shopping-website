import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import Button from "react-bootstrap/Button";
import { auth } from "./firebaseSetup";
import profile from "./image/profile.png";
import "./App.css";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };
  const signOut = async () => {
    await auth.signOut();
  };
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
      {user && <Button onClick={signOut}>Sign Out</Button>}
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
        <h2 className="mt-4 text-center">Welcome {user.email}</h2>
      )}
    </>
  );
};
export default Login;
