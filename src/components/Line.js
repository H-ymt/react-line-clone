import React, { useEffect } from "react";
import SignOut from "./SignOut";
import { auth, db } from "../firebase";
import { useState } from "react";
import SendMessage from "./SendMessage";
import styled from "styled-components";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <Messages>
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <Message
              key={id}
              className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"} `}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </Message>
          </div>
        ))}
      </Messages>

      <SendMessage />
    </div>
  );
}

export default Line;

const Message = styled.p`
  display: flex;
  padding: 8px 10px 0px 10px;
  margin: 20px;
  border-radius: 3000px;
  box-shadow: 0 0 10px rgb(164, 164, 164);
  align-items: center;
`;

const Messages = styled.div`
  margin: 110px 0;
  display: flex;
  flex-direction: column;
`;
