import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../firebase.js";
import React from "react";
import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";

const SignOut = () => {
  return (
    <Header>
      <SignOutButton onClick={() => auth.signOut()}>
        Sign out<LogoutIcon></LogoutIcon>
      </SignOutButton>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </Header>
  );
};

export default SignOut;

const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-around;
  height: 75px;
  width: 100%;
  background-color: #222a41;
  color: white;
`;

const SignOutButton = styled(Button)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: white !important;
  font-size: 16px !important;
  text-transform: none !important;
`;
