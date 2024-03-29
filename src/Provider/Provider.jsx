import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../Firbase/Firbase.confiq";

export const AuthContext = createContext(null)
const Provider = ({ children }) => {
    const [user, setUser] = useState()
    const [lodding, setLodding] = useState(true)
    const createUser = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const userLogin = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const userLogout = () => {
        setLodding(true)
        return signOut(Auth)
    }

    useEffect(()=>{
        const unsubcriber = onAuthStateChanged(Auth, createUser =>{
            setUser(createUser)
            setLodding(false)
        })
        return ()=>{
            return unsubcriber
        }
    },[])
    console.log(user)

    const AuthInfo = {
        createUser,
        userLogin,
        userLogout,
        user,
        lodding
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;