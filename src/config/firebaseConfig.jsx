import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgzOOcMXSc4GpHd7kYTfROQtXv1enUq5A",
  authDomain: "brand-shop-6dd50.firebaseapp.com",
  projectId: "brand-shop-6dd50",
  storageBucket: "brand-shop-6dd50.appspot.com",
  messagingSenderId: "741701813586",
  appId: "1:741701813586:web:4781edbab1ba211826e68b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
