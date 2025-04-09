import React from "react";
import "./app.css"
import { CookieClicker } from "./components/CookieClicker";
import { CatFacts } from "./components/CatFacts";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="p-6">
      <CookieClicker />
      <CatFacts />
      <Users />
    </div>
  );
}

export default App;
