import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import { auth } from "../firebaseSetup/firebaseSetup";
import profile from "../image/profile.png";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
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
      setError("");
    } catch (error) {
      console.error(error);
      if (
        passwordRef.current!.value.length < 6 &&
        passwordRef.current!.value.length > 0
      ) {
        setError("Password must be at least 6 characters");
      } else if (emailRef.current!.value.includes("@") === false) {
        setError("Invalid email");
      }
    }
  };
  const signOut = async () => {
    await auth.signOut();
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

                <button className="button" onClick={createAccount}>
                  Sign up
                </button>
                <div>
                  <Button variant="link">Forgot password</Button>
                  <a className="mt-1">Or</a>
                  <Button onClick={() => navigate("/")} variant="link">
                    Already have an account
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
export default Register;
