import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/create">User erstellen</Link>
      </button>
      <button>
        <Link to="/login">login</Link>
      </button>
    </div>
  );
}
