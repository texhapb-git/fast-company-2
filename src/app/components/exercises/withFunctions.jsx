import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const AUTH_KEY = "auth";
    const AUTH_VALUE = "token";

    const isLogin = !!localStorage.getItem(AUTH_KEY) || false;

    const handleLogin = () => {
        localStorage.setItem(AUTH_KEY, AUTH_VALUE);
    };

    const handleLogout = () => {
        localStorage.removeItem(AUTH_KEY);
    };

    return (
        <CardWrapper>
            <Component {...props} isAuth={isLogin} onLogin={handleLogin} onLogOut={handleLogout} />
        </CardWrapper>
    );
};

export default withFunctions;
