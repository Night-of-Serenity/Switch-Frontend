/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import * as authService from "../api/auth-api";
import { setAccessToken, removeAccessToken } from "../utils/localstroge";
import axios from "axios";
import {toast } from 'react-toastify';

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
       try {
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
        toast.success('Sign up Success')
        fetchMe();
        window.my_modal_2.showModal();
       } catch(err) {
        toast.error('Sign up Failed ')
       }
    };

    const onSubmitLogin = async (user, e) => {
        try {
            e.preventDefault();
        const { email, password } = user;

        if (!email || !password) {
            return;
        }
        const res = await authService.login(user);
        const token = res.data.accessToken;
        toast.success('Sign in Success')
        setAccessToken(token);
        fetchMe();
        }catch(err) {
        toast.error('Sign in Failed ')
        }
    };

    const glogin = async (credential) => {
       try {
        const res = await axios.post("http://localhost:8000/auth/logingoogle", {
            token: credential,
        });
        const token = res.data.accessToken;
        setAccessToken(token);
        fetchMe();
        toast.success('Sign in Success')
       }catch(err) {
        toast.error('Sign in Failed ')
       }
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
