import { useContext, createContext } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { authentication } from '../firebase-config';
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const navigate = useNavigate();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((result) => {
                // The signed-in user info.
                // const user = result.user;
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    const logOut = () => {
        signOut(authentication)
        navigate("/")
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authentication, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <AuthContext.Provider value={{ signInWithGoogle, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};