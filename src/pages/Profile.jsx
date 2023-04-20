import React, { useState } from "react";
import { useEffect } from "react";

export default function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  async function logout() {
    try {
      await fetch("http://localhost:9000/logout", { credentials: "include" });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    try {
      fetch("http://localhost:9000/profile", { credentials: "include" })
        .then((res) => {
          return res.json();
        })
        .then((userInfo) => {
          setUserInfo(userInfo);
          console.log("user info", userInfo);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <p>{userInfo ? userInfo.email : "Profile"}</p>
      
        <button onClick={logout}>logout</button>
       
    </div>
  );
}
