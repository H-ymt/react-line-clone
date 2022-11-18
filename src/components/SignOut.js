import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import React from "react";
import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call"

const SignOut = () => {
  return (
    <Header>
      <SignOutButton onClick={() => auth.signOut()}>サインアウト</SignOutButton>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon/>
    </Header>
  );
};

export default SignOut;

const Header = styled.div`
  background-color: #222a41;
  color: white;
  height: 75px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SignOutButton = styled(Button)`
  color: white;
  font-size: 15px;
`;
