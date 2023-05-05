import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const handleUpdateProfile = async (name, image) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
      toast.success("Profile update successful");
    } catch (error) {
      const toastError = "Profile update error:" + error.message;
      toast.error(toastError);
    }
  };

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    registerUser,
    user,
    logOut,
    loginUser,
    handleUpdateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <Toaster></Toaster>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
