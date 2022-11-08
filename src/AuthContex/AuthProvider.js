import React, { createContext, useEffect, useState, } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase';



export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    //create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signInGoogle
    const signInGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    //user login 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //signOut
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

        })
        return (() => {
            return unsubscribe
        })
    }, [])


    const authInfo = {
        createUser,
        signInGoogle,
        loginUser,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;