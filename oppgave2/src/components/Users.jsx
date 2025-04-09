import { useState } from "react";
import "../App.css";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export function Users() {
  const [users, setUsers] = useState(mockData);
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const addUser = () => {
    if (!newUsername || !newEmail) return;
    const newUser = { username: newUsername, email: newEmail };
    setUsers([...users, newUser]);
    setNewUsername("");
    setNewEmail("");
  };

  return (
    <div className="mt-10 max-w-md mx-auto">
      <h2 className="text-xl mb-4">👥 Brukere</h2>
      <ul className="mb-4 space-y-1">
        {users.map((user, idx) => (
          <li key={idx}>
            {user.username} – <span className="text-gray-600">{user.email}</span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Brukernavn"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        className="border p-1 mr-2"
      />
      <input
        type="email"
        placeholder="E-post"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        className="border p-1 mr-2"
      />
      <button onClick={addUser} className="bg-blue-500 text-white px-3 py-1 rounded">
        Legg til bruker
      </button>
    </div>
  );
}
