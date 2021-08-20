import React, { useContext, useState } from "react";
import AuthInput from "../components/UI/input/AuthInput";
import AuthButton from "../components/UI/button/AuthButton";
import AuthService from "../components/API/AuthService";
import { AuthContext } from "../context";
import { useHistory } from "react-router-dom";

export default function Auth() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const history = useHistory();

    const FormLabelStyle = {
        color: "#3aaf9f",
        textAlign: "center",
    };

    const register = async (e) => {
        e.preventDefault();
        const res = await AuthService.register(username, password);
        if (res?.response?.data?.error) setStatus("not registered");
    };

    const login = async (e) => {
        e.preventDefault();
        const res = await AuthService.login(username, password);
        if (res?.response?.data?.error) return setStatus("not logged in");
        const token = res?.data?.access_token;
        if (!token) setStatus("something went wrong, try again latter");
        document.cookie = `token=${token}`;
        setIsAuth(true);
        history.push("/home");
    };

    return (
        <form className={"auth-form"}>
            <h1 style={FormLabelStyle}>Create Account / Login</h1>
            <p style={{ color: "red", textAlign: "center" }}>{status}</p>
            <AuthInput
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type={"text"}
                placeholder={"Username"}
            />
            <AuthInput
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={"password"}
                placeholder={"Password"}
            />
            <div className="auth_buttons-container">
                <AuthButton onClick={register} text={"register"} />
                <AuthButton onClick={login} text={"login"} />
            </div>
        </form>
    );
}
