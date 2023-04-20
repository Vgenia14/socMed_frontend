import React, { useState } from "react";

export default function Create() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:9000/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res);

    if (res.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  };

  return (
    <div>
      <form onSubmit={createUser} method="post" enctype="multipart/form-data">
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
        <input
          type="file"
          name="profilePicture"

          // onChange={(e) => setPassword(e.target.value)}
        />
        <button>User erstellen</button>
      </form>
    </div>
  );
}
