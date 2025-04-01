// Organized React Love Tokens App
// This version is optimized for GitHub & Vercel Deployment

import React, { useState } from "react";
import "./styles.css";

export default function LoveTokensApp() {
  const [tokens, setTokens] = useState({ Detya: 0, Wacu: 0 }); // Start Wacu at 0
  const [giver, setGiver] = useState("Detya");
  const [reason, setReason] = useState("");
  const [history, setHistory] = useState([]);

  const giveToken = () => {
    if (reason.trim() === "") return;
    const receiver = giver === "Detya" ? "Wacu" : "Detya";
    setTokens({ ...tokens, [receiver]: tokens[receiver] + 1 });
    setHistory([{ giver, receiver, reason }, ...history]);
    setReason("");
  };

  return (
    <div className="container">
      <h1 className="title">💖 Love Tokens 💖</h1>
      <p className="subtitle">Show appreciation with cute tokens! ✨</p>
      <div className="jars">
        {Object.entries(tokens).map(([name, count]) => (
          <div key={name} className="jar">
            <h2>{name}'s Jar</h2>
            <p>{count}/50 tokens</p>
            <div className="token-bar">
              <div
                className="fill"
                style={{ height: `${(count / 50) * 100)%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="token-form">
        <h2>Give a Token 💌</h2>
        <div className="giver-buttons">
          <button
            className={giver === "Detya" ? "active" : ""}
            onClick={() => setGiver("Detya")}
          >
            Detya
          </button>
          <button
            className={giver === "Wacu" ? "active" : ""}
            onClick={() => setGiver("Wacu")}
          >
            Wacu
          </button>
        </div>
        <p>{giver} is giving a token to {giver === "Detya" ? "Wacu" : "Detya"} 🎀</p>
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Why are they special today? 💕"
