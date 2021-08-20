import React from "react";
import cl from "./AuthButton.module.css";

export default function AuthButton({ text, onClick }) {
  return (
    <button className={cl.authButton} onClick={onClick}>
      {text}
    </button>
  );
}
