import React, { createContext, useEffect, useState, useState } from "react";
import { jwtDecode } from "jwt-decode";

function AuthContextProvider(props) {
    const { children } = props;
    let [token, setToken] = useState(null);
    let [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && TokenValidation(token)) {
            setToken(token);
        } else {
            logout();
        }
    }, []);
    useEffect(() => {
        if (TokenValidation(token)) {
            const { email, password } = jwtDecode(token);
            setUser({ email, password });
        } else {
            setUser(null);
        }
    }, [token]);
}

function TokenValidation(token) {
    if (!token) {
        return false;
    }
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.exp * 1000 > Date.now();
    } catch (error) {
        return false;
    }
}

function check() {
    const token = localStorage.getItem("token");
    if (token && TokenValidation(token)) {
        setToken(token);
    } else {
        logout();
    }
}

function login(newToken) {
    if (TokenValidation(newToken)) {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    } else {
        logout();
    }
}

function logout() {
    localStorage.removeItem("token");
    setToken(null);
}

return (
    <AuthContext.Provider
        value={{
            token,
            user,
            TokenValidation,
            login,
            logout,
        }}>
        {children}
    </AuthContext.Provider>
);

export default AuthContextProvider;
