import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5T0-0wYINmbkt3i_rOWoDSIvaEOO41sg",
  authDomain: "react-sneakers-ecommerce.firebaseapp.com",
  projectId: "react-sneakers-ecommerce",
  storageBucket: "react-sneakers-ecommerce.appspot.com",
  messagingSenderId: "618357684347",
  appId: "1:618357684347:web:23bc953602281262ab4ade",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
