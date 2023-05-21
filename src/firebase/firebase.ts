import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail, 
    signOut
} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6GrA5J82Clfov4LxUoZhgkVTipKFYyrY",  
    authDomain: "graphqli-app.firebaseapp.com", 
    projectId: "graphqli-app",
    storageBucket: "graphqli-app.appspot.com", 
    messagingSenderId: "52276664996", 
    appId: "1:52276664996:web:91ec37451a802cc61ea431", 
    measurementId: "G-R2WVXYFYWL" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

auth.currentUser?.getIdTokenResult

const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('login', auth.currentUser)
    } catch (err) {
      console.error(err);
      if(err instanceof Error) {
        alert(err.message);
      }
    }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      if(err instanceof Error) {
        alert(err.message);
      }
    }
  };

  const sendPasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert((err as Error).message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithEmailAndPassword,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };