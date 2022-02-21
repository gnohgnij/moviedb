import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "moviedb-dcf12",
  storageBucket: "moviedb-dcf12.appspot.com",
  messagingSenderId: "900501943321",
  appId: "1:900501943321:web:2e9653d7eea03d31442688",
  measurementId: "G-HRL3N8YBRZ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
