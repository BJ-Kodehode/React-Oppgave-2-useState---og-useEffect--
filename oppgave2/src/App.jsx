import React from "react";
import "./App.css";
import { CookieClicker } from "./components/CookieClicker";
import { CatFacts } from "./components/CatFacts";
import { Users } from "./components/Users";

function App() {
  return (
    <div>
      <CookieClicker />
      <CatFacts />
      <Users />
    </div>
  );
}

export default App;
