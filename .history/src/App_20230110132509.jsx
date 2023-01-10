import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Auth from "./components/Auth";
import Account from "./components/Account";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Auth />
      <Account/>
    </div>
  );
}

export default App;
