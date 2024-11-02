import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [match, setMatch] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleValidation = (e) => {
    e.preventDefault();
    if (username == "user" && password == "password") {
      setMatch(true);
      setError("");
    } else {
      setMatch(false);
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {match ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <div>
          <form onSubmit={handleValidation}>
            {error && <p className="error">{error}</p>}
            <label htmlFor="Username">Username:</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              id="Username"
              type="text"
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              id="password"
              type="password"
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
