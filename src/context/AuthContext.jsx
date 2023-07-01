/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../api/auth-api";
import { setAccessToken, removeAccessToken } from "../utils/localstroge";
import axios from "axios";

const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [userDetail, setUserDetail] = useState({});

    useEffect(() => {
        const run = async () => {
            const res = await authService.fetchMe();
            setUser(res.data.user);
        };
        run();
    }, []);

    const fetchMe = async () => {
        const res = await authService.fetchMe();
        setUser(res.data.user);
        setUserDetail(res.data);
    };

    const onSubmitRegister = async (newUser) => {
        const {
            email,
            password,
            username,
            confirmPassword,
            firstName,
            lastName,
        } = newUser;

        if (
            !email ||
            !password ||
            !username ||
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
        window.my_modal_2.showModal();
    };

    const onSubmitLogin = async (user, e) => {
        e.preventDefault();
        // console.log(user);
        const { email, password } = user;

        if (!email || !password) {
            return;
        }
        const res = await authService.login(user);

        const token = res.data.accessToken;
        setAccessToken(token);
        fetchMe();
    };

    const glogin = async (credential) => {
        const res = await axios.post("http://localhost:8000/auth/logingoogle", {
            token: credential,
        });
        const token = res.data.accessToken;
        setAccessToken(token);
        fetchMe();
    };

    const logout = () => {
        removeAccessToken();
        setUser({});
    };

    const values = {
        user,
        glogin,
        fetchMe,
        logout,
        onSubmitRegister,
        onSubmitLogin,
        userDetail,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
}

export default AuthContextProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
