import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ setUserInfo] = useState({});

  async function login(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      
     const data = await response.json();
     console.log(data);
         
         // setUserInfo(userInfo);
          //console.log(userInfo);
    } catch (error) {
      console.log(error);
    }

    
  }
  return (
    <div>
      <form onSubmit={login} method="post">
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>login</button>
      </form>
    </div>
  );
}
