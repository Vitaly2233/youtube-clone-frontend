import React from "react";
import cl from "./AuthInput.module.css";

export default function AuthInput(props) {
  return (
    <div className={cl.authContainer}>
      <input {...props} className={cl.authInput} />
    </div>
  );
}
