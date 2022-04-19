import React from "react";
//import firebase from "firebase";
//import * as firebase from "firebase/app";
//import * as firebase from "firebase";
//import { auth } from "firebase/compat/auth";
//import "firebase/compat/firestore";
//import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//import "firebase/auth";

//just works
import { auth } from "../firebase";

import "firebase/compat/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Button } from "@material-ui/core";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <>
      <Button onClick={signInWithGoogle}>Sign in with google!</Button>
    </>
  );
}

export default SignIn;
