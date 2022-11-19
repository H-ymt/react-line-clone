import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }

  return (
    <div>
      <form action="" onSubmit={sendMessage}>
        <SendMsg>
          <InputArea
            type="text"
            placeholder="メッセージを入力してください"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Send />
        </SendMsg>
      </form>
    </div>
  );
};

export default SendMessage;

const InputArea = styled(Input)`
  width: 78%;
  font-size: 16px;
  font-weight: 700;
  margin-left: 5px;
  margin-bottom: -3px;
`;

const Send = styled(SendIcon)`
  color: #7ac2ff;
  margin-left: 20px;
`;

const SendMsg = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  z-index: 1;
  border-top: 1px solid lightgray;
  margin-left: -5px;
  padding: 24px;
  padding-bottom: 32px;
  background-color: #fafafa;
`;
