import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../auth/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

export default function UserContex({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });

    return () => unsubscribe();
  }, []);

  //Firebase User Registration function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Firebase Sign In function
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Firebase Sign In with Google Function
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Firebase Sign Out function
  const logOut = (email, password) => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
