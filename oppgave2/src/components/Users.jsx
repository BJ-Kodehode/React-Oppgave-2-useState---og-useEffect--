import { useEffect, useState, useCallback } from "react";
import "../App.css"; // Import skal alltid være øverst på filen

export default function CatInfo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [randomFact, setRandomFact] = useState("");

  const getRandomFact = (factsArray) => {
    if (factsArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * factsArray.length);
      setRandomFact(factsArray[randomIndex].fact);
    }
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://catfact.ninja/facts?limit=5");
      if (!response.ok) {
        throw new Error(`HTTP error. Status ${response.status}`);
      }
      const result = await response.json();
      setData(result.data);
      getRandomFact(result.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
      <h2 className="title">🐾 Tilfeldig Kattfakta</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && randomFact && (
        <p style={{ marginBottom: "1rem" }}>{randomFact}</p>
      )}

      <button className="button" onClick={() => getRandomFact(data)} disabled={loading}>
        {loading ? "Laster..." : "Vis tilfeldig faktum"}
      </button>

      <button
        className="button"
        style={{ marginTop: "10px" }}
        onClick={fetchData}
        disabled={loading}
      >
        {loading ? "Laster..." : "Hent nye fakta"}
      </button>

      {!loading && !error && (
        <>
          <h3 style={{ marginTop: "2rem" }}>Alle fakta:</h3>
          <ul className="list">
            {data.map((fact, index) => (
              <li key={index}>{fact.fact}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
