import { createContext, useContext, useEffect, useState } from "react";
import * as authService from '../api/auth-api'
import { setAccessToken } from "../utils/localstroge";



const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  
//   useEffect(() => {
//     const run = async () => {
//       const res = await authService.fetchMe();
//       setUser(res.data.user);
//     };
//     run();
//   }, []);

  // const onChangeRegister = (field, value) => {
  //   const cloneUser = { ...newUser };
  //   cloneUser[field] = value;
  //   setNewUser(cloneUser);
  // };

  const fetchMe = async () => {
    const res = await authService.fetchMe();
    setUser(res.data.user);
  };

  const onSubmitRegister = async (newUser) => {
    const { email, password, confirmPassword,firstName, lastName } =
      newUser;

    if (
     
      !email ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName 
    ) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    const res = await authService.register(newUser);

    const token = res.data.accessToken;
    setAccessToken(token);

    fetchMe();
  };

  const onSubmitLogin = async (user,e) => {
    e.preventDefault()
    console.log(user)
    const { email, password } = user;
    
    if (!email || !password) {
      return;
    }
    const res = await authService.login(user);

    const token = res.data.accessToken;
    setAccessToken(token);
    // fetchMe();
  };

  const values = { user, onSubmitRegister, onSubmitLogin };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

export const useAuth = () => {
    return useContext(AuthContext)
}
