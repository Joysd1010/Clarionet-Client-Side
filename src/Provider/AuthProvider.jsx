import React, { children, createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./../Firebase/firebase.config";
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
 const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

 
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);


      if(loggedUser){
              axios.post('http://localhost:5000/jwt',{email:loggedUser?.email})
              .then(data=>{
                console.log(data.data.token)
                localStorage.setItem('acces_token',data.data.token)
                setLoading(false);
              })
      }
      else{

        localStorage.removeItem('acces_token')
        setLoading(false);

      }
      // console.log('obser logged', loggedUser)
      setLoading(false);

      setUser(loggedUser);
      
    });

    return () => {
      unsubscribe();
    };
  }, [reload]);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    googleSignIn,loading,
    updateUser,
    setReload,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
