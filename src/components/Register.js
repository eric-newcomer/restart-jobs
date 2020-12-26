import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase/firebase";

import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) return alert("Please enter a full name.");

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
          });
      })
      .catch((error) => alert(error));
  };

//   const loginToApp = (e) => {
//     e.preventDefault();
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((userAuth) => {
//         dispatch(
//           login({
//             email: userAuth.user.email,
//             uid: userAuth.user.uid,
//             displayName: userAuth.user.displayName,
//           })
//         );
//       })
//       .catch((err) => alert(err));
//   };

  return (
    <div className="login">
      <img
        src="https://avatars0.githubusercontent.com/u/70076380?s=200&v=4"
        alt=""
      />
      <form action="">
        <input
          type="text"
          placeholder="Full Name (required if registering)"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="login__register" onClick={register}>
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
