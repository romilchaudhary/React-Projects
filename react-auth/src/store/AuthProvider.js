import { useState } from "react";
import authContext from "./authContext";

const AuthProvider = (props) => {
    const storedToken = localStorage.getItem('token')
    const [token, setToken] = useState(storedToken);

    const userIsLoggedIn = !!token
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token')
    }

    const contextValue = {
        token: token,
        isLoggedin: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
        <authContext.Provider value={contextValue}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthProvider;