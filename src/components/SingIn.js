import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import styled from "styled-components";

const SingIn = () => {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Title>LINE CLONE APP</Title>
      <LoginButton className="login-button" onClick={signInWithGoogle}>
        Login with Google<LoginIcon></LoginIcon>
      </LoginButton>
    </div>
  );
};

export default SingIn;

const LoginButton = styled(Button)`
  position: absolute;
  top: 50vh;
  left: 50%;
  padding: 8px 24px !important;
  font-size: 18px !important;
  transform: translateX(-50%);
  color: #ffff !important;
  text-transform: none !important;
  border: 1px solid #4169e1 !important;
  background-color: #4169e1 !important;

  &:hover {
    opacity: 0.7;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 30vh;
  left: 50%;
  font-size: 6vw;
  transform: translateX(-50%);
  color: #35f108;
`;
