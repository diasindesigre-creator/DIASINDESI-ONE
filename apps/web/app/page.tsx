"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (username === "admin" && password === "admin") {
      router.push("/dashboard");
    } else {
      alert("Λάθος στοιχεία");
    }
  }

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg,#1565C0,#42A5F5)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: 420,
          background: "#fff",
          borderRadius: 16,
          padding: 40,
          boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1565C0",
            marginBottom: 5,
          }}
        >
          DIASINDESI SHOP
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: 30,
          }}
        >
          eCommerce Management System
        </p>

        <input
          type="text"
          placeholder="Όνομα χρήστη"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Κωδικός"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: 14,
            background: "#1565C0",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Σύνδεση
        </button>
      </div>
    </main>
  );
}