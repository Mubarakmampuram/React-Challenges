import React, { useState } from "react";
import { useContext } from "react";

import Logo from "../../olx-logo.png";
import { FirebaseContext } from "../../store/FirebaseContext";
import "./Signup.css";
import { auth, db } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [password, SetPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firebase);
    const result = await createUserWithEmailAndPassword(auth, email, password);

    console.log(`User ${result.user.uid} created`);

   await updateProfile(auth.currentUser, { displayName: username});

    

   const user = await addDoc(collection(db, "users"), {
      id: result.user.uid,
      username: username,
      phone: phone,
    });
    console.log(user);
    console.log(user.id)
    history.push("/login");
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            onChange={(e) => {
              console.log(e.target.value);
              SetUsername(e.target.value);
            }}
            className="input"
            type="text"
            value={username}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            onChange={(e) => {
              console.log(e.target.value);
              SetEmail(e.target.value);
            }}
            type="email"
            value={email}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            onChange={(e) => {
              console.log(e.target.value);
              SetPhone(e.target.value);
            }}
            value={phone}
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            onChange={(e) => {
              console.log(e.target.value);
              SetPassword(e.target.value);
            }}
            type="password"
            value={password}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
