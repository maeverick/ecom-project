import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfoFyAhAIhaq03Aa09dcsuf-iKYJ7yRBs",
  authDomain: "ecom-project-f744d.firebaseapp.com",
  projectId: "ecom-project-f744d",
  storageBucket: "ecom-project-f744d.appspot.com",
  messagingSenderId: "135634249395",
  appId: "1:135634249395:web:0236107458eeea8d9af2c6",
  measurementId: "G-M9G9SENPQF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Create or update a user document
export const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  return userRef;
};
