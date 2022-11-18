import "./App.css";
import SingIn from "./components/SingIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Line from "./components/Line";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <GlobalStyle />
      {user ? <Line /> : <SingIn />}
    </div>
  );
}

export default App;
