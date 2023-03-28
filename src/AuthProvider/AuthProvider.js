import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState("");
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const googleSignin = () => {
    return signInWithPopup(auth, provider)
  }
  const signout = () => {
    return signOut(auth)
  }
  const profileUpdate = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setuser(currentUser)
    })
    return () => unsubscribe();
  }, [])


  const userInfo = {
    user,
    createUser,
    signinUser,
    googleSignin,
    signout,
    profileUpdate,
  }
  return (
    <div>
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;