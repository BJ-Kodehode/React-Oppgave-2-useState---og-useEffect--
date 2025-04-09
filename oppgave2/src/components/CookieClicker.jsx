import { useState } from "react";
import "../App.css";

export function CookieClicker() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl mb-4">🍪 Cookie Clicker</h2>
      <p className="mb-2">Poeng: {score}</p>
      <button onClick={handleClick}>
        <img src="./cookie.png" alt="Image of a Cookie" width="100" />
      </button>
    </div>
  );
}
