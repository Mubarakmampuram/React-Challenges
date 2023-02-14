import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'





const firebaseConfig = {
    apiKey: "AIzaSyDUG-FKzMbwAZXLprJEGbylYCg-y6GCLp4",
    authDomain: "olx-clone-26942.firebaseapp.com",
    projectId: "olx-clone-26942",
    storageBucket: "olx-clone-26942.appspot.com",
    messagingSenderId: "229302389217",
    appId: "1:229302389217:web:12b09a8bc1b7c6655a6aa0",
    measurementId: "G-DE7E136D5W"
  };
 export  const app = initializeApp(firebaseConfig);  
  export const auth = getAuth(app);
 export const db = getFirestore(app);
 export const storage = getStorage(app,"gs://olx-clone-26942.appspot.com");
