import { createContext, useEffect, useState } from "react";
import React from 'react'
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '@/services/firebase/firebaseConfig';
const provider = new GoogleAuthProvider();

export const AutenticacaoContext = createContext({})

export const AutenticacaoProvider = ({children}) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const loadStorageAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase: token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase: user")
            if(sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        loadStorageAuth()
    }, [])
// Login com o Google
    const auth = getAuth(app);
    function logar() {
    signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user)
        sessionStorage.setItem("@AuthFirebase: token", token)
        sessionStorage.setItem("@AuthFirebase: user", JSON.stringify(user))
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
// Final Login com Google

    return(
        <AutenticacaoContext.Provider value={{logar, signed: !!user, user: user}}>
           {children} 
        </AutenticacaoContext.Provider>
    )
}
