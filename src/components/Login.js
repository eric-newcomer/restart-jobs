import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase/firebase";

import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [name, setName] = useState("");
  const [registerScreen, setRegisterScreen] = useState(false);
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (!name) return alert("Please enter a full name.");
    else if (!email) return alert("Please enter your email.");
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
              })
            );
          })
          .catch((err) => alert(err));
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailLogin, passwordLogin)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((err) => alert(err));
  };

  const showRegister = () => {
    setRegisterScreen(true);
  };

  const showLogin = () => {
    setRegisterScreen(false);
  };

  return (
    <div className="login">
      <h1>Restart Jobs 🌳</h1>
      {registerScreen ? (
        <>
          <h2>Register</h2>
          <form action="">
            <input
              value={name}
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={email}
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={password}
              type="password"
              placeholder="Set Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={register}>Register Now</button>
          </form>
        </>
      ) : (
        <>
          <h2>Sign In</h2>
          <form action="">
            <input
              value={emailLogin}
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <input
              value={passwordLogin}
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <button onClick={loginToApp}>Sign In</button>
          </form>
        </>
      )}
      {registerScreen ? (
        <p>
          already have an account?{" "}
          <span className="login__register" onClick={showLogin}>
            Sign In
          </span>
        </p>
      ) : (
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={showRegister}>
            Register Now
          </span>
        </p>
      )}
    </div>
  );
}

export default Login;
