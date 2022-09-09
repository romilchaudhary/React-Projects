import { createContext } from "react";

 const authContext = createContext({
    token: '',
    isLoggedin: false,
    login: (token) => {},
    logout: () => {}
 });

 export default authContext;