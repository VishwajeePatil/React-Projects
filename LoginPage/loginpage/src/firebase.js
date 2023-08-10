import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCm6L7WBOf26FBRBSXwHe4fzrmqLTyjrlg",
  authDomain: "login-9e23b.firebaseapp.com",
  projectId: "login-9e23b",
  storageBucket: "login-9e23b.appspot.com",
  messagingSenderId: "220489585662",
  appId: "1:220489585662:web:aeeadf80c54e730a7426af",
  measurementId: "G-GXY8GR6404"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {app,auth,provider};
