// import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  height: 100px;
  width: 100vw;
  background-color: #93aad4;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

img {
  border-radius: 50%;
  height: 30px;
  margin-top: -7px;
  border: 2px solid black;

  @media screen and (min-width: 640px) {
    height: 35px;
    margin-top: -10px;
  }

  @media screen and (min-width: 768px) {
    height: 45px;
  margin-top: -20px;
  }
}

p {
  font-weight: 500;
  font-size: 15px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  overflow-wrap: break-word;
  
  @media screen and (min-width: 640px) {
    font-size: 20px;
  }
  
  @media screen and (min-width: 768px) {
      font-size: 25px;
    }
}`;

export default GlobalStyle;
