import React, { useContext } from "react";
import { AuthContext } from "../context";
import "../styles/Navbar.css";

export default function Navbar() {
    const { isAuth } = useContext(AuthContext);
    return (
        isAuth && (
            <div className={"navigation"}>
                <a href={"home"}>home</a>
            </div>
        )
    );
}
